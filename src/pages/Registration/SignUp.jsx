import React, { useRef } from 'react'
import "./SignUp.css";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignUp() {
  const navigate = useNavigate();

  var passwordRef = useRef(null);
  const emailRef = useRef(null);
  const genderRef = useRef(null);
  const cityRef = useRef(null);
  const phoneRef = useRef(null);
  var nameRef = useRef(null);

  const url = "http://localhost:5001/auth/sign-up";



  const signUptasks = (e)=>{
    //do the task for signin
    // e.preventDefault();
   
    

    //using useRef get all input 

    var data = {

      name:nameRef.current.value,
      password:passwordRef.current.value,
      email : emailRef.current.value,
      gender : genderRef.current.value,
      city : cityRef.current.value,
      phone : phoneRef.current.value

    }

axios.post(url,data).then((res)=>{

  if(res.data.ok)
  {
  console.log("data from the post ",res.data);
  }
  else
  {
    //this Error will trigger the catch block
    throw Error(res.data.error);
  }
  

}).catch((error)=>{

  console.log("error",error.message);
  

});


      // alert("Registered Successfully !!!!");
     // navigate("/SignIn")
  }
  return (
    <div className='form-container'>
      <h1>Sign Up</h1>
      <form className="form" >
        <div className='input-div'><input type="text" placeholder='Name' ref={nameRef} /></div>
        <div className='input-div'><input type="text"  id="" placeholder='City' ref={cityRef}/></div>
        <div className='input-div'>
          <select name="" id="" ref={genderRef} defaultValue="">
            <option value="" disabled>Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <div className='input-div'><input type="text" name="" id=""  placeholder='Email' ref={emailRef}/></div>
        <div className='input-div'><input type="number" name="" id="" placeholder='Phone Number' ref={phoneRef}/></div>
        <div className='input-div'><input type="password" name="" id=""  placeholder='password' ref={passwordRef}/></div>
        <div className='input-div'><input type="password" name="" id=""  placeholder='confirm password'/></div>
        <button type='button' onClick={signUptasks}     
        
        >Sign Up</button>
        <div className='redirect'>
          <p>Existing User ?</p>
          <Link to="/SignIn">Login</Link>
        </div>
      </form>
    </div>
  )
}

export default SignUp
