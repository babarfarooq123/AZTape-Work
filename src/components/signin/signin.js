import React from 'react'
import Navbar from "./../homepage/navbar"
import "./signin.css"
import {Link} from "react-router-dom"


export default function signin() {
    return (
        <div className="bg-gray">
            <Navbar />
            <div className="container box-1">
                <h1>SIGN IN</h1>
                <div className="auth-box">
                    <div className="auth-box-1 col-sm-12  col-lg-5">
                        <p>Existing Customer</p>
                       
                        <input className="form-control" type="emil" placeholder="Email"/>
                        <br/>
                        <input className="form-control" type="password" placeholder="Password"/>
                        <br/>
                        <p className="password1">Forget password</p>
                        <button>Sign In</button>
                    </div>
                    
                    <div className="auth-box-2 col-sm-12 col-lg-5 ">
                        <p>New Customer</p>
                        <input className="form-control"  type="email" placeholder="Email"/>
                        <br/>
                        <button><Link to="/register" className="linker">Continue</Link></button>
                    </div>
                
                </div>
                <p className="password2">Forget password</p>    
            </div>

            
        </div>
    )
}
