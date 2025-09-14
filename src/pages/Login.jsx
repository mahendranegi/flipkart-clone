import React, { useState } from "react";
import { Card, Form, Input, Button, Typography } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

import { LoginWrapper } from "../components/styled.js";
import Title from "antd/es/skeleton/Title.js";
import { Link } from "react-router-dom";

function Login() {
  return (
      <LoginWrapper>
          <Link to='/'><i class="fa-solid fa-xmark"></i></Link>
      <Card>
        <Title level={3} style={{ textAlign: "center" }}>
          Login to E-Shop
        </Title>

        <Form
          name="login-form"
          layout="vertical"
          // onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: "Please input your Email!" },
              { type: "email", message: "Enter a valid Email!" },
            ]}
          >
            <Input  size="large" prefix={<UserOutlined />} placeholder="Enter your email" />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
             size="large"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Enter your password"
               size="large"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              // loading={loading}
              block
            >
              Login
            </Button>
          </Form.Item>

          <div style={{ textAlign: "center" }}>
            <span>Don't have an account? </span>
            <Link to="/Signup">Sign Up</Link>
          </div>
        </Form>
      </Card>
      
    </LoginWrapper>
  )
}

export default Login