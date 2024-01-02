import React from 'react'
import "./CSS/LoginSignup.css"

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" name="" placeholder='Your Name' />
          <input type="email" name="" placeholder='Email Address' />
          <input type="password" name="" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">Already have an account ? <span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terns of use & privacy policy</p>
        </div>
      </div>

    </div>
  )
}

export default LoginSignup
