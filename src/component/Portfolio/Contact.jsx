import React, { Component } from "react";
import axios from 'axios';
import { Form, Input, Button, Checkbox, message } from "antd";
import { UserOutlined, MailOutlined, MessageOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import "../../style2/contact.css";

class ContactForm extends Component {
  onFinish = (values) => {
    console.log('Sending mail...', window.location.href, window.location.hostname)
    axios.post('http://localhost:8000/sendmail', values)
    .then(res =>{
      console.log(res, "response")
      message.success('Email sent successfully');
      // this.props.form.resetFields()
    })
    .catch(error => {
      console.log(error, "error")
      message.error('Some error occurred');
    })
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    message.error('Fill all fields.');
  };
  render() {
    return (
      <div id="contact" className="background-alt">
        <h2 className="heading">Contact Me</h2>
        <center>
          <div style={{ width: "800px" }}>
            <Form
              name="basic"
              initialValues={{ remember: true }}
              onFinish={this.onFinish}
              onFinishFailed={this.onFinishFailed}
            >
              <Form.Item
                className="form-field"
                name="name"
                rules={[{ required: true, message: "Please input your name!" }]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Your Name"
                />
              </Form.Item>

              <Form.Item
                className="form-field"
                name="mail"
                rules={[
                  {type: "email", message: "The input is not valid E-mail!"},
                  { required: true, message: "Please input your email!" }
                ]}
              >
                <Input
                  prefix={<MailOutlined className="site-form-item-icon" />}
                  placeholder="Your Email"
                />
              </Form.Item>

              <Form.Item
                className="form-field"
                name="message"
                rules={[
                  { required: true, message: "Please input your message!" },
                ]}
              >
                <Input.TextArea
                  prefix={<MessageOutlined className="site-form-item-icon" />}
                  placeholder="Your Message"
                />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Send Email
                </Button>
              </Form.Item>
            </Form>
          </div>
        </center>
      </div>
    );
  }
}

export default ContactForm;
