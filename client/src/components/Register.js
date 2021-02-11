import React, { useState } from 'react'
import './Register.css'

const Register = () => {
    return (
        <div className='Register'>
            <div className='register-flex-container'>
                <div className='register-white-box'>
                    <h1 className='register-heading'>Create your account</h1>
                    <form>
                        <input className='register-form-input' type="email" placeholder="Email"></input>
                        <br />
                        <input className='register-form-input' type="text" placeholder="Full Name"></input>
                        <br />
                        <input className='register-form-input' type="password" placeholder="Password"></input>
                        <br />
                        <input className='register-form-submit' type="submit" value="Create Account"></input>
                    </form>
                    <p className="register-alt-signin">Have an account? <b><a href='./#'>Sign in.</a></b></p>
                </div>
            </div>
        </div>
    )
}

export default Register;