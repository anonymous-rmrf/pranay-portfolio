import React, { Component } from 'react'
import 'antd/dist/antd.css'
import '../../style/about.css'
import email from 'emailjs'
import { Form, Icon, Input, Button, message } from 'antd';
const { TextArea } = Input;

class Contact extends Component {

    componentDidMount() {
        console.log(this.props.form)
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (err) {
                message.error('Fill all fields');
                console.log(err)
            } else {
                console.log('Received values of form: ', values);
            }
            
        });
    };

    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        // Only show error after a field is touched.
        const nameError = isFieldTouched('name') && getFieldError('name');
        const emailError = isFieldTouched('email') && getFieldError('email');
        const messageError = isFieldTouched('message') && getFieldError('message');
        return (
            <Form layout="inline" onSubmit={this.handleSubmit}>
                <Form.Item validateStatus={nameError ? 'error' : ''} help={nameError || ''}>
                    {getFieldDecorator('name', {
                        rules: [{ required: true, message: 'Please input your name!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Your name"
                        />,
                    )}
                </Form.Item>
                <br/>
                <Form.Item validateStatus={emailError ? 'error' : ''} help={emailError || ''}>
                    {getFieldDecorator('email', {
                        rules: [{ required: true, message: 'Please input your email!' }],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Your Email"
                        />,
                    )}
                </Form.Item>
                <br/>
                <Form.Item validateStatus={messageError ? 'error' : ''} help={messageError || ''}>
                    {getFieldDecorator('message', {
                        rules: [{ required: true, message: 'Please input your message!' }],
                    })(
                        <TextArea
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Your name"
                            autoSize={{ minRows: 5, maxRows: 20 }}
                        />,
                    )}
                </Form.Item>
                <br/>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Log in
          </Button>
                </Form.Item>
            </Form>
        );
    }
}

const WrappedHorizontalLoginForm = Form.create({ name: 'horizontal_login' })(Contact);

export default WrappedHorizontalLoginForm