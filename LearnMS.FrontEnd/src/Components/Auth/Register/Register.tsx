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
                <Input placeholder="first name"/>
            </Form.Item>
        </Form>
    );
}
