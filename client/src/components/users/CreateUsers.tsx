import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import CommonModal from "../common/modal/CommonModal";
import { Button, Form, Input, Select, Tooltip } from "antd";

import { toast } from "sonner";
import {
  UserOutlined,
  InfoCircleOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
} from "@ant-design/icons";
import { createUserRequest } from "../../api/users";

const ROLE_OPTIONS = [
  { value: "admin", label: "Admin" },
  { value: "user", label: "User" },
];
const CreateUsers = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(createUserRequest, {
    onSuccess: (data) => {
      toast(`User named ${data.fullName} created`);
      queryClient.setQueriesData(["users"], (old) => [...old, data]);
    },
    onError: (error: any) => {
      console.log("Failed:", error);
      toast(error.response.data[0].message);
    },
  });
  const onFinish = ({ fullName, email, password, role }: any) => {
    console.log("Success:", fullName, email, password, role);
    mutation.mutate({
      fullName,
      email,
      password,
      role,
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
    toast(`${errorInfo} `);
  };
  return (
    <CommonModal buttonText={"New User"} footer={true}>
      <div className=" flex items-center justify-center">
        <Form
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout="vertical"
        >
          <Form.Item
            label="Full Name"
            name="fullName"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              suffix={
                <Tooltip title="Extra information">
                  <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
                </Tooltip>
              }
            />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                type: "email",
                message: "Please input your email!",
              },
            ]}
          >
            <Input prefix={"@"} />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              placeholder="Password"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </Form.Item>
          <Form.Item
            label="Role"
            name="role"
            rules={[{ required: true, message: "Please select a role!" }]}
          >
            <Select options={ROLE_OPTIONS} />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </CommonModal>
  );
};

export default CreateUsers;
