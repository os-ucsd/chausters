import React, { useState } from 'react'
import './Login.css'

const Login = () => {
    return (
        <div className='login'>
            <div className='login-flex-container'>
                <div className='login-white-box'>
                    <h1 className='login-heading'>Sign in</h1>
                    <form>
                        <input className='login-form-input' type="email" placeholder="Email"></input>
                        <br />
                        <input className='login-form-input' type="password" placeholder="Password"></input>
                        <br />
                        <input className='login-form-submit' type="submit" value="Sign in"></input>
                    </form>
                    <p className="login-alt-signin">Don't have an account? <b><a href='./#'>Register.</a></b></p>
                </div>
            </div>
        </div>
    )
}

export default Login;