import React, { useState } from 'react'

const LoginPopup = (setShowLogin) => {
    const[currentState,setCurrentState]=useState("Sign Up");
  return (
    <div className="login-popup">
        <form className='login-popup'>
            <div className="login-popup-title">
                <h2>{currentState}</h2>
                <button onClick={()=>setShowLogin(False)}>Cross</button>
            </div>

            <div className="login-popup-input">
                {currentState==="Login"?<></>:<input type='text' placeholder='Name' required/>}
                <input type='email'
                placeholder='Email' required/>
                <input type='password'
                placeholder='password' required/>
            </div>
            <button>{currentState==="Sign up"?"Create account":"Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required/>
                <p>By continuing I AGREE TO TERMS OF USE </p>
            </div>
            {currentState==="Login"?
            <p> Create a new account? <span onClick={()=> setCurrentState("Sign up")}>Click here</span></p>:
            <p> Already have an account? <span onClick={()=> setCurrentState("Login")}>Login Here</span></p>}
        </form>
    </div>
  )
}
export default LoginPopup
