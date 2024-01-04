import { Button, DatePicker, Form, Input } from "antd";

import styles from "./Register.module.scss";
import { useState } from "react";

interface RegisterForm {
    firstName: string;
    lastName: string;
    email: string;
    dateOfBirth: Date;
    courseReferralLink: string;
}

export default function RegisterForm(): JSX.Element {
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [dateOfBirth, setDateOfBirth] = useState<Date>();
    const [courseReferralLink, setCourseReferralLink] = useState<string>("");

    return (
        <Form className={styles.form} name="register-form">
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
                <Button type="primary">Register</Button>
            </Form.Item>
        </Form>
    );
}
