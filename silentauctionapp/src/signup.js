import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap' ;
import './App.css';


const SignUp = (props) => {


  return (
    <Form className="save-wrapper">
        <h1 className="text-center">
                <span className="font-weight-bold ">Sign Up Now </span>
            </h1>
            {/* <img src={logo} className="App-logo" alt="logo" /> */}


            <FormGroup>
                <Label>Enter First Name: </Label>
                <Input type="name" placeholder="first name"/>
            </FormGroup><FormGroup>
                <Label>Enter Last Name: </Label>
                <Input type="name" placeholder="last name"/>
            </FormGroup>
            <FormGroup>
                <Label>Enter Email: </Label>
                <Input type="email" placeholder="email"/>
            </FormGroup>

            <FormGroup>
                <Label>Enter Password</Label>
                <Input type="password" placeholder="password"/>
            </FormGroup>
            <Button className="btn-lg btn-dark btn-block">Sign Up</Button>
            {/* <Button className="btn-lg btn-dark btn-block">Sign Up</Button> */}
            
    </Form>
  );
}

export default SignUp;
