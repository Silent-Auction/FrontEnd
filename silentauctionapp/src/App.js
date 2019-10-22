import React from 'react';
import './App.css';
import logo from './logo.svg';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap' ;
import { FacebookLoginButton } from 'react-social-login-buttons';
import { BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Form className="login-form">
      <h1 className="text-center">
        <span className="font-weight-bold ">Silent Auction <br/>Login Page </span>
      </h1>
      {/* <img src={logo} className="App-logo" alt="logo" /> */}

      <FormGroup>
        <Label>Email</Label>
        <Input type="email" placeholder="email"/>
      </FormGroup>
      <FormGroup>
        <Label>Password</Label>
        <Input type="password" placeholder="password"/>
      </FormGroup>
      <Button className="btn-lg btn-dark btn-block">Log In</Button>
      {/* <Button className="btn-lg btn-dark btn-block">Sign Up</Button> */}
      <div className="text-center pt-3"> Or continue with your social media account</div>
      <FacebookLoginButton className="mt-3 mb-3"/>
      <div className="text-center">
      <a href="/sign-up">Sign Up</a>
      <span className="p-2"> | </span>
      <a href="/forgot-password">Forgot Password</a>

      </div>
    </Form>
  );
}

export default App;
