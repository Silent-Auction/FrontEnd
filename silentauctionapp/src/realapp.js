// import React from 'react';
// import './App.css';
// import logo from './logo.svg';
// import { Button, Form, FormGroup, Label, Input } from 'reactstrap' ;
// import { BrowserRouter as Router, Link} from 'react-router-dom';
// import SignUp from './signup';
// // import Login from './login';
// import Route from 'react-router-dom/Route'


// function App() {
//   return (
//     <Form className="login-form">
//       <h1 className="text-center">
//         <span className="font-weight-bold ">Silent Auction <br/>Login Page </span>
//       </h1>
//       {/* <img src={logo} className="App-logo" alt="logo" /> */}

//       {/* <Button className="btn-lg btn-dark btn-block">Log In</Button>
//       <Button className="btn-lg btn-dark btn-block">Sign Up</Button> */}
      
//       <div className="text-center">
//       {/* <a href="/sign-up">Sign Up</a>
//       <span className="p-2"> | </span>
//       <a href="/forgot-password">Forgot Password</a> */}


//       <Router > 
//         <Link to='/'></Link>
//         <Link className="font-weight-bold " to='/login' >Log In </Link> |
//         <Link className="font-weight-bold " to='/signup' > Sign Up </Link>

//         {/* <Route  path='/' component={App}/> */}
//         <Route  exact path='/signup' component={SignUp}/>
//         {/* <Route  path='/login' component={Login}/> */}


//       </Router>
//       </div>
//     </Form>
//   );
// }

// export default App;







// <form>
//     <div className="input-row">
//         <label htmlFor="name">Name</label>
//         <input 
//         type="text"
//         name="name"
//         id="name"
//         placeholder="Enter Name"
//         onChange={handleChange}
//         onBlur={handleBlur}
//         value={values.name} />
//     </div>
//     <div className="input-row">
//         <label htmlFor="email">Email</label>
//         <input 
//         type="text"
//         name="name"
//         id="name"
//         placeholder="Enter Email"
//         onChange={handleChange}
//         onBlur={handleBlur}
//         value={values.name} />
//     </div>
//     <div className="input-row">
//         <label htmlFor="password">Password</label>
//         <input 
//         type="text"
//         name="name"
//         id="name"
//         placeholder="Enter Password"
//         onChange={handleChange}
//         onBlur={handleBlur}
//         value={values.name} />
//     </div>
    
// </form>