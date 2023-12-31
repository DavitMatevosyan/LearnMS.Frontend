import { Button, Checkbox, Form, Input } from "antd";

import styles from "./Login.module.scss";

const onFinish = (values: any): void => { // should be fixed
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any): void => {
  console.log("Failed:", errorInfo);
};

type loginFields = {
  username?: string;
  password?: string;
  remember?: string;
};

function LoginForm(): JSX.Element {
  return (
  	<div className={styles.form}>
        <Form
        name="login-form"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 13 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off">
            <Form.Item<loginFields>
              label="Username"
              name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
            >
                <Input />
            </Form.Item>

            <Form.Item<loginFields>
              label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item<loginFields>
              name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 13 }}
            >
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 9, span: 13 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
  </div>
  );
}

export default LoginForm;
