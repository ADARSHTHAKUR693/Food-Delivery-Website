import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
const LoginPopup = ({setShowLogin}) => {
  const [currentState,setCurrState] = useState("Login")
  return (
    <div className='Login-popup'> 
      <form className="login-popup-container">
        <div className="login-popup-title">
        <h2>{currentState}</h2>
        <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
      
        </div>
        <div className="login-popup-inputs"> 
          {currentState==="Login"?<></>:
          <input type="text"  placeholder='Your Name' required/>}
          <input type="email"  placeholder='Your Email' required/>
          <input type="password"  placeholder='Your Password' required/>
        </div>
        <button>{currentState==="Sign Up"?"Create Account":"Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required/>
          <p>By continuing,i agree to the terms od use & privacy policy</p>
        </div>
        {currentState==="Login"?<p>Create a new account?<span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>:<p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login Here</span></p>}
       
      </form>
    </div>
  )
}

export default LoginPopup
