import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/auth";
import { loginRequest, profileRequest } from "../../api/auth";

const LoginForm: React.FC = () => {
  const setToken = useAuthStore((state) => state.setToken);
  const setProfile = useAuthStore((state) => state.setProfile);
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = e.currentTarget.elements[0].value;
    const password = e.currentTarget.elements[1].value;

    const resLogin = await loginRequest(email, password);
    setToken(resLogin.data.token);

    const resProfile = await profileRequest();
    setProfile(resProfile.data);

    navigate("/dash");
  };

  return (
    <form
      name="normal_login"
      className="login-form flex justify-center flex-col"
      //   initialValues={{ remember: true }}
      //   onFinish={onFinish}
      onSubmit={handleSubmit}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: "Please input your Username!" }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your Password!" }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      {/* <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item> */}

      <Form.Item className="flex justify-center">
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        {/* Or <a href="">register now!</a> */}
      </Form.Item>
    </form>
  );
};

export default LoginForm;
