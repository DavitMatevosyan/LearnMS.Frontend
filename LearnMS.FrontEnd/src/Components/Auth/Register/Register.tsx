import { useState } from "react";
import DatePicker from "react-datepicker";

const RegisterForm = () => {
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [dateOfBirth, setDateOfBirth] = useState<Date>();
    const [referralLink, setReferralLink] = useState<string>('');

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("pressed", email);  
    }

    return (
        <>
            <div className="col-6 mx-auto mt-5 " style={{background: "cyan"}}>
                <form onSubmit={(e) => handleRegister(e)}>
                    <div className="mb-3 row">
                        <label className="col-sm-3 col-form-label text-end">First Name</label>
                        <div className="col-sm-7">
                            <input className="form-control" type="text" placeholder="enter your first name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label className="col-sm-3 col-form-label text-end">Last Name</label>
                        <div className="col-sm-7">
                            <input className="form-control" type="text" placeholder="enter your last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label className="col-sm-3 col-form-label text-end">Email</label>
                        <div className="col-sm-7">
                            <input className="form-control" type="text" placeholder="example@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label className="col-sm-3 col-form-label text-end">Date of Birth</label>
                        <div className="col-sm-7">
                            <DatePicker className='form-control' selected={dateOfBirth} onChange={(date: Date) => setDateOfBirth(date)} />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label className="col-sm-3 col-form-label text-end">Referral Link</label>
                        <div className="col-sm-7">
                            <input className="form-control" type="text" placeholder="enter your first name" value={referralLink} onChange={(e) => setReferralLink(e.target.value)} />
                        </div>
                    </div>
                    <div className="d-grid gap-2 d-md-flex justify-content-center">
                        <button className="btn btn-primary" onClick={() => console.log("press")}>Register</button>
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
