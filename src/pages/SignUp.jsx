import React, { useState } from "react";
import { Card, Form, Input, Button, Typography } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

import { LoginWrapper } from "../components/styled.js";
import Title from "antd/es/skeleton/Title.js";
import { Link } from "react-router-dom";

function SignUp() {
  return (
      <LoginWrapper>
          <Link to='/'><i class="fa-solid fa-xmark"></i></Link>
      <Card>
        <Title level={3} style={{ textAlign: "center" }}>
          SignUp to E-Shop
        </Title>

        <Form
          name="login-form"
          layout="vertical"
          // onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            name="name"
            label="Name"
            rules={[
              { required: true, message: "Please enter your Name!" },
              { type: "email", message: "Enter a valid Name!" },
            ]}
          >
            <Input  size="large"  placeholder="Enter your Name" />
          </Form.Item>

<Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: "Please input your Email!" },
              { type: "email", message: "Enter a valid Email!" },
            ]}
          >
            <Input  size="large"  placeholder="Enter your email" />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
             size="large"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input.Password
             
              placeholder="Enter your password"
               size="large"
            />
          </Form.Item>
 <Form.Item
            name="conpassword"
            label="Confirm Password"
             size="large"
            rules={[{ required: true, message: "Please Enter Confirm Password!" }]}
          >
            <Input.Password
             
              placeholder="Enter your confirm password"
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
              Sign Up
            </Button>
          </Form.Item>
        </Form>
      </Card>
      
    </LoginWrapper>
  )
}

export default SignUp