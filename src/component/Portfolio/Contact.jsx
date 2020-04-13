import React, { Component } from "react";
import axios from "axios";
import { Form, Input, Button, Checkbox, message } from "antd";
import { UserOutlined, MailOutlined, MessageOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import "../../style2/contact.css";


class ContactForm extends Component {
  formRef = React.createRef();

  constructor(props) {
    super(props);
    // this.submitForm = this.submitForm.bind(this);
    this.state = {
      name: "",
      email: "",
      message: "",
      status: "",
    };
  }
  
  onFinish = (values) => {
    console.log("Sending mail...", values);
    axios
      .post("https://formspree.io/xrgapwzl", values)
      .then((res) => {
        console.log(res, "response")
        this.setState({ status: "SUCCESS" });
        message.success("Email sent successfully");
        this.formRef.current.resetFields();
        // this.props.form.resetFields()
      })
      .catch((error) => {
        // console.log(error, "error")
        message.error("Some error occurred");
      });
  };


  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    message.error("Fill all fields.");
  };

  render() {
    return (
      <div id="contact" className="theme">
        <h2 className="heading">Contact Me</h2>
        <center>
        <div className="form-box">
          <Form
            className="form-wrapper"
            ref={this.formRef}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >
            <Form.Item
              className="form-field"
              name="name"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input
                placeholder="Your Name"
                className="form-control"
              />
            </Form.Item>
            <Form.Item
              name="mail"
              className="form-field"
              rules={[
                { type: "email", message: "The input is not valid E-mail!" },
                { required: true, message: "Please input your email!" },
              ]}
            >
              <Input
                placeholder="Your Email"
                className="form-control"
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
                rows="5"
                placeholder="Your Message"
                className="form-control"
              />
            </Form.Item>
            {this.state.status === "SUCCESS" ? (
                <p style={{"fontSize": "1.2em", color: "#57cbcc"}} >Thanks!</p>
              ) : (
                <button className="contact-submit">Submit</button>
              )}
          </Form>
          </div>
        </center>
      </div>
    );
  }
}

//<div className="form-box">
  //          <form
  //            onSubmit={this.submitForm}
  //            action="https://formspree.io/xrgapwzl"
  //            method="POST"
  //            className="form-wrapper"
  //          >
  //            <div class="form-group">
  //              <input
  //                type="text"
  //                placeholder="Your Name"
  //                class="form-control"
  //                name="name"
  //                id="name"
  //              />
  //            </div>
  //            <div class="form-group">
  //              <input
  //                type="email"
  //                placeholder="Your Email"
  //                class="form-control"
  //                name="email"
  //                id="email"
  //              />
  //            </div>
  //            <div class="form-group">
  //              <textarea
  //                rows="5"
  //                placeholder="Message"
  //                class="form-control"
  //                name="message"
  //                id="message"
  //              ></textarea>
  //            </div>
  //            {this.state.status === "SUCCESS" ? (
  //              <p>Thanks!</p>
  //            ) : (
  //              <button className="contact-submit">Submit</button>
  //            )}
  //            {this.state.status === "ERROR" && (
  //              <p>Ooops! There was an error.</p>
  //            )}
  //          </form>
  //        </div>

export default ContactForm;
