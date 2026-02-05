import React from 'react'
import "./SignIn.css";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import LoginStatusContext from './LoginStatusContext';
import { useContext } from 'react';

function SignIn() {


const [{login,setLogin}]= useContext(LoginStatusContext);
 const navigate = useNavigate();

 const handleSignIn = 
            ()=>{
                 
           //to stop page reload and maintain login value    
           
            setLogin(true);     
            alert(setLogin)
            console.log("sign onclick");     
           

            console.log("login:", login);
            navigate("/");

            }
   
  return (
    <div className='SignInContainer'>
      <h1>Login </h1>
    <p>Get access to your Orders,
     Wishlist and Recommendations </p>
      <form action="
      " className='form'>

        <div className='input-div'>
          
            <input className = 'input' type="email" name="" id="name" style={{padding:"5px 12px"}} placeholder='email' />
        </div>

        <div className='input-div'>
            
            <input className='input' type="password" name="" id="password" style={{padding:"5px 12px"}} placeholder='password' />
        </div>

        <button type='button' id='signin' onClick={
            handleSignIn
        }>Sign In</button>

      </form>

        <p>New to DudeMart ?</p><Link to="/SignUp" >Create an account</Link>

    </div>
  )
}

export default SignIn
