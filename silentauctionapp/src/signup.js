import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap' ;
import './App.css';
import { FacebookLoginButton } from 'react-social-login-buttons';
import { withFormik, Field, Formik } from "formik";
import axios from "axios";


const SignUp = (props) => {

    // handleSubmit(values, { setStatus }) {
    //     axios
    //       // values is our object with all our data on it.
    //       .post("https://silent-auction-bw.herokuapp.com/api/auth/login", {
    //         firstName: '',
    //         lastName: '',
    //         username: '',
    //         password:''
    //       })
    //       .then(res => {
    //         setStatus(res.data);
    //       })
    //       .catch(err => console.log(err.response));
    //   };

    //   handleSubmit(values, { setStatus }) {
    //     axios
    //       // values is our object with all our data on it.
    //       .post("https://silent-auction-bw.herokuapp.com/api/auth/register", {
    //         firstName: '',
    //         lastName: '',
    //         username: '',
    //         password:''
    //       })
    //       .then(res => {
    //         setStatus(res.data);
    //       })
    //       .catch(err => console.log(err.response));
    //   };
    axios.post('https://silent-auction-bw.herokuapp.com/api/auth/login', {
        firstName: '',
        lastName: '',
        username: '',
        password:''
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });


      axios.post('https://silent-auction-bw.herokuapp.com/api/auth/register', {
        firstName: '',
        lastName: '',
        username: '',
        password:''

      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    function toggleClass() {
        toggleClass(document.getElementById('overlay'), 'open');
      }
      
      var el = document.getElementById('overlayBtn');
      if (el){
        el.addEventListener('click', false);
      
        var text = document.getElementById('overlayBtn');
        text.onclick = function(){
          this.innerHTML = (this.innerHTML === "Menu") ? "Close" : "Menu";
          return false;
        };
      }





  return (
    <Formik initialValues={{ name: " " , email: " " }}>    
        {({handleChange, values}) => (
            <Form className="save-wrapper">
            <h1 className="text-center">
                    <span className="font-weight-bold ">Sign Up Now </span>
                </h1>
                <FormGroup>
        <select>
            <option disabled header value="">Select User</option>
            <option value="bidder">Bidder</option>
            <option value="seller">Seller</option>
        </select> <br/>
                    <Label>Enter First Name: </Label>
                    <Input 
                    type="name" 
                    placeholder="first name" 
                    onChange={handleChange}
                    id="1"  
                    />
                </FormGroup><FormGroup>
                    <Label>Enter Last Name: </Label>
                    <Input 
                    type="name" 
                    placeholder="last name" 
                    onChange={handleChange} 
                    id="2"/>
                </FormGroup>
                <FormGroup>
                    <Label>Enter Username: </Label>
                    <Input 
                    type="username" 
                    id="username"
                    name="username"
                    placeholder="username" 
                    onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label>Enter Password</Label>
                    <Input 
                    type="password" 
                    placeholder="password" 
                    onChange={handleChange}
                    id="password" />
                </FormGroup>
                <Button type="submit"className="btn-lg btn-dark btn-block">Sign Up</Button>
                <div className="text-center pt-3"> Sign up with your social media account</div>
        <FacebookLoginButton className="mt-3 mb-3"/>
        <div className="text-center"></div>
                {/* <Button className="btn-lg btn-dark btn-block">Sign Up</Button> */}
                
        </Form>
        )}
        
    </Formik>

  );
}

export default SignUp;
