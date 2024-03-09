import React, { useState } from "react";
import DatePicker from "react-datepicker"; // update datepicker version later
import { emailRegex } from "../../../Utils/Constants/Regex";
import { RegistrationModel, handleRegistration } from "./useRegisterHandler";
import { NavigateFunction } from "react-router-dom";
import { userType } from "../../../Models/Enums/userType";
import { useForm } from "react-hook-form";

type RegisterFormProps = {
    navigate: NavigateFunction;
}

function RegisterForm(props: RegisterFormProps) {
    const { navigate } = props;
    const [isLoading, setIsLoading] = useState<boolean>();
    const [isError, setIsError] = useState<boolean>();

    const {register, handleSubmit, watch, formState: { errors }} = useForm<RegistrationModel>() 


    const [model, setModel] = useState<RegistrationModel>(
        { 
            firstName: '', 
            lastName:'', 
            email:'', 
            userType: userType.Student,
            password: '',
            dateOfBirth: new Date(),
            referralLink:''
        });

    const handleRegister = (data: RegistrationModel) => {
        setIsLoading(true);
        handleRegistration(data)
            .then(() => {
                setIsLoading(false);
                navigate("/my");
            })
            .catch(() => setIsError(true));       
    }

    function changeField(e: React.ChangeEvent<HTMLInputElement>) {
        setModel((prevModel) => {
            return { ...prevModel, [e.target.name]:e.target.value };
          });
    }

    const areFieldsValid = model.firstName?.length > 0
                            && model.lastName?.length > 0
                            && emailRegex.test(model.email)
                            && model.referralLink?.length === 5; // consider adding ZOD to here



    return (
        <form onSubmit={handleSubmit((data) => handleRegister(data))}>
            
        </form>
    )

    return (
        <>
            {isLoading && (
                <p>IT IS LOADING PLEASE WAIIIIIT</p>
            )}

            {isError && (
                <p>ERROR HAPPENED</p>
            )}

            <div className="col-6 mx-auto mt-5">
                <form className="needs-validation" onSubmit={(e) => handleRegister(e)} noValidate>
                    <div className="ps-5 mb-5">
                        <label className="me-5">Register as</label>
                        <div className="form-check form-check-inline me-5">
                            <input 
                                className="form-check-input" 
                                type="radio" 
                                name="userType" 
                                value={model.userType} 
                                onChange={() => setModel((prevModel) => {return { ...prevModel, userType: userType.Student }; }) } 
                                checked={model.userType == userType.Student}/>
                            <label className="form-check-label">Student</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input 
                                className="form-check-input" 
                                type="radio" 
                                name="userType" 
                                value={model.userType} 
                                onChange={() => setModel((prevModel) => {return { ...prevModel, userType: userType.Teacher }; }) } 
                                checked={model.userType == userType.Teacher} />
                            <label className="form-check-label">Teacher</label>
                        </div>
                    </div>
                
                    <div className="mb-3 row">
                        <label className="col-sm-3 col-form-label text-end">First Name</label>
                        <div className="col-sm-7">
                            <input 
                                className="form-control" 
                                type="text" 
                                name="firstName"
                                placeholder="John" 
                                value={model.firstName} 
                                onChange={changeField}
                                required />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label className="col-sm-3 col-form-label text-end">Last Name</label>
                        <div className="col-sm-7">
                            <input 
                                className="form-control" 
                                type="text" 
                                name="lastName"
                                placeholder="Smith" 
                                value={model.lastName} 
                                onChange={changeField} 
                                required />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label className="col-sm-3 col-form-label text-end">Email</label>
                        <div className="col-sm-7">
                            <input 
                                className="form-control"
                                type="text"
                                name="email" 
                                placeholder="example@example.com" 
                                value={model.email} 
                                onChange={changeField} />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label className="col-sm-3 col-form-label text-end">Password</label>
                        <div className="col-sm-7">
                            <input 
                                className="form-control"
                                type="password"
                                name="password" 
                                placeholder="password" 
                                value={model.password} 
                                onChange={changeField} />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label className="col-sm-3 col-form-label text-end">Date of Birth</label>
                        <div className="col-sm-7">
                            <DatePicker className='form-control' selected={model.dateOfBirth} onChange={e => console.log("changed", e)} />
                        </div>
                    </div>
                    {model.userType === userType.Student && (
                        <div className="mb-3 row">
                            <label className="col-sm-3 col-form-label text-end">Referral Link</label>
                            <div className="col-sm-7">
                                <input 
                                    className="form-control" 
                                    type="text"
                                    name="referralLink"
                                    placeholder="cs101" 
                                    value={model.referralLink} 
                                    onChange={changeField} />
                            </div>
                        </div>
                    )}
                    <div className="d-grid gap-2 d-md-flex justify-content-center">
                        <button className="btn btn-primary" type="submit"  disabled={!areFieldsValid && !isLoading}>Register</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default RegisterForm;
