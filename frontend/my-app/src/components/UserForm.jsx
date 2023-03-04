import React,{useState} from "react";
import { Button, Form, Input,Col,Row } from "antd";
import { createUsers } from "../utils/userUtil";


export const UserForm = () => {
  const [form] = Form.useForm();
  const [loading,setLoading] = useState(false)

  const onFinish = async (values) => {
    const response = await createUsers(values)
    console.log("user created",response.data)
  };

  return (
    <>
      <Row>
        <Col lg={24}>
          <Form
            name="userForm"
            form={form}
            colon={false}
            requiredMark="optional"
            labelAlign="left"
            labelCol={{
              span: 4,
            }}
            wrapperCol={{
              span: 16,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              label="Name:"
              name="name"
              rules={[
                {
                  required: true,
                  message: "The name is required.",
                },
                {
                  pattern: /^[a-zA-Z0-9]+$/,
                  message: "Name can only include letters and numbers.",
                },
              ]}
              initialValue="John"
            >
              <Input  />
            </Form.Item>
            <Form.Item
              label="Email:"
              name="email"
              rules={[
                {
                  required: true,
                  message: "The email is required.",
                },
                {
                  pattern: /^[a-zA-Z0-9]+$/,
                  message: "Name can only include letters and numbers.",
                },
              ]}
            >
              <Input placeholder="Please enter a vaild email"  />
            </Form.Item>
           
            <Form.Item
              wrapperCol={{
                offset: 4,
                span: 16,
              }}
            >
              <Button htmlType="submit">Submit</Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
};
