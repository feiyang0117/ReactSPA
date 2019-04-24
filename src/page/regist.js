import React, { Component } from "react";
import { Form, Icon, Input, Button,Checkbox } from 'antd';
import '../index.css'; 
  function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  }
  
  class HorizontalLoginForm extends Component {
    componentDidMount() {
      // To disabled submit button at the beginning.
    //   this.props.form.validateFields();
    }
  
    handleSubmit = (e) => {
      e.preventDefault();
    //   this.props.form.validateFields((err, values) => {
    //     if (!err) {
    //       console.log('Received values of form: ', values);
    //     }
    //   });
    }
  
    render() {
      return (
        <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            </Form.Item>
            <Form.Item>
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            </Form.Item>
            <Form.Item>
                <Checkbox>Remember me</Checkbox>
                <a className="login-form-forgot" href="">Forgot password</a>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                </Button>
                Or <a href="">register now!</a>
            </Form.Item>
        </Form>
      );
    }
  }
  
 export default HorizontalLoginForm;