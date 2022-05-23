import React, {useEffect} from "react";

import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {Button, Checkbox, Form, Input} from "antd";
import {gql, useLazyQuery} from "@apollo/client";
import {Navigate, useNavigate} from "react-router-dom";
import Home from "./Home";

const authQuery = gql`
  query MyQuery($_eq: String!, $_eq1: String!) {
    login(where: {username: {_eq: $_eq}, password: {_eq: $_eq1}}) {
      id
      name
      password
      username
    }
  }
`;

const testQuery = gql`
  query MyQuery2 {
    login {
      id
      name
      password
      username
    }
  }
`;

const Login = () => {
  const [getAuth, {loading, data}] = useLazyQuery(authQuery);
  let navigate = useNavigate();
  const onFinish = (values) => {
    getAuth({
      variables: {
        _eq: values.username,
        _eq1: values.password,
      },
    });
  };

  useEffect(() => {
    if (data?.login.length === 1) {
      console.log(data);
      return navigate("home", {replace: true});
    }
  }, [data, navigate]);

  if (loading) {
    return <h1>Loading</h1>;
  }
  return (
    <>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="#">register now!</a>
        </Form.Item>
      </Form>
    </>
  );
};

export default Login;
