import React from 'react'
import "./SignIn.css";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignIn({ login, setLogin }) {
 const navigate = useNavigate();

 const handleSignIn = 
            (e)=>{
                 
           //to stop page reload and maintain login value    
           e.preventDefault();
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
            <label for="">Email:</label>
            <input className = 'input' type="email" name="" id="name" style={{padding:"5px 12px"}} />
        </div>

        <div className='input-div'>
            <label for="">Password:</label>
            <input className='input' type="password" name="" id="password" style={{padding:"5px 12px"}} />
        </div>

        <button id='signin' onClick={
            handleSignIn
        }>Sign In</button>

      </form>
    </div>
  )
}

export default SignIn
