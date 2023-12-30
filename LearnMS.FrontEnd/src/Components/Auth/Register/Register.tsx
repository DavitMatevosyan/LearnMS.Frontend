import { Form, Input } from "antd";

export default function RegisterForm(): JSX.Element {
    return (
        <Form name="register-form">
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
                <Input placeholder="First name"/>
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
                <Input placeholder="Last name"/>
            </Form.Item>
        </Form>
    );
}
