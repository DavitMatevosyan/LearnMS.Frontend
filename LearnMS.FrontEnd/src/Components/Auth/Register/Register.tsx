import React, { useState } from "react";
import DatePicker from "react-datepicker"; // update datepicker version later
import { emailRegex } from "../../../Utils/Constants/Regex";
import { RegistrationModel, handleRegistration } from "./useRegisterHandler";
import { NavigateFunction } from "react-router-dom";

type RegisterFormProps = {
    navigate: NavigateFunction;
}


const RegisterForm = (props: RegisterFormProps) => {
    const { navigate } = props;

    const [model, setModel] = useState<RegistrationModel>(
        { 
            firstName: '', 
            lastName:'', 
            email:'', 
            dateOfBirth: new Date(),
            referralLink:''
        });
    let isLoading = false;
    let isError = false;

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        
        const response =  handleRegistration(model);
        isLoading = response.isLoading;
        isError = response.isError;
        navigate("/my");
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
        <>
            {isLoading && (
                <p>IT IS LOADING PLEASE WAIIIIIT</p>
            )}

            <div className="col-6 mx-auto mt-5">
                <form className="needs-validation" onSubmit={(e) => handleRegister(e)} noValidate>
                    <div className="mb-3 row">
                        <label className="col-sm-3 col-form-label text-end">First Name</label>
                        <div className="col-sm-7">
                            <input 
                                className="form-control" 
                                type="text" 
                                name="firstName"
                                placeholder="enter your first name" 
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
                                placeholder="enter your last name" 
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
                        <label className="col-sm-3 col-form-label text-end">Date of Birth</label>
                        <div className="col-sm-7">
                            <DatePicker className='form-control' selected={model.dateOfBirth} onChange={e => console.log("changed", e)} />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label className="col-sm-3 col-form-label text-end">Referral Link</label>
                        <div className="col-sm-7">
                            <input 
                                className="form-control" 
                                type="text"
                                name="referralLink"
                                placeholder="enter your referral Link" 
                                value={model.referralLink} 
                                onChange={changeField} />
                        </div>
                    </div>
                    <div className="d-grid gap-2 d-md-flex justify-content-center">
                        <button className="btn btn-primary" type="submit"  disabled={!areFieldsValid && !isLoading}>Register</button>
                    </div>
                </form>
            </div>
        </>
    )
}


{/* <Form className={styles.form} name="register-form">
            <Form.Item
                name="firstName"
                label="First Name"
                rules={[{
                            required: true,
                            max: 50,
                            message: "Not valid First Name"
                        }
                    ]
                }>
                <Input placeholder="First name" onChange={e => setFirstName(e.target.value)}/>
            </Form.Item>
            <Form.Item
                name="lastName"
                label="Last Name"
                rules={[{
                            required: true,
                            max: 50,
                            message: "Not valid Last Name"
                        }
                    ]
                }>
                <Input placeholder="Last name" onChange={e => setLastName(e.target.value)}/>
            </Form.Item>
            <Form.Item
                name="email"
                label="Email"
                rules={[{
                            required: true,
                            message: "Not valid Email"
                        }
                    ]
                }>
                <Input placeholder="Email" onChange={e => setEmail(e.target.value)}/>
            </Form.Item>
            <Form.Item
                name="dateOfBirth"
                label="Date of Birth"
                rules={[{
                            required: true,
                            message: "Not valid date of birth"
                        }
                    ]
                }>
                <DatePicker placeholder="Date of Birth" onChange={(_, dob) => setDateOfBirth(new Date(dob))}/>
            </Form.Item>
            <Form.Item
                name="referralLink"
                label="Course Referral Link"
                rules={[{
                            required: true,
                            len: 6,
                            message: "Not valid Course Referral Link"
                        }
                    ]
                }>
                <Input placeholder="link" onChange={e => setCourseReferralLink(e.target.value)}/>
            </Form.Item>
            <Form.Item>
                <Button type="primary" onClick={e => submitForm(e)}>Register</Button>
            </Form.Item>
        </Form> */}

export default RegisterForm;
