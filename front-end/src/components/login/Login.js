import React from "react";
import "bootstrap/dist/css/bootstrap.css"
import "./login.css"

const Login = ()=>{
    return(
        <div className="headbox pt-3">
            <div className="row align-items-center box justify-content-center m-auto">
                <div className="heading mb-5"> </div>
                <form className="login-form">
                    <div className="field">
                        <input id="username" type="name" placeholder="Phone number, username, or email"/>
                        <label for="username">Phone number, username, or email</label>
                    </div>
                    <div className="field">
                        <input id="password" type="password" placeholder="Password"/>
                        <label for="password">Password</label>
                    </div>
                    <button className="login-button mb-3" title="login">Log In</button>
                    <div className="mt-4 align-items-center justify-content-center">                        
                        <div className="hr"><hr/></div>
                        <div className="or">OR</div>
                    </div>
                   
                    <div className="other">
                        <button className="fb-login-btn" type="button">
                            <i className="fa fa-facebook-official fb-icon"></i>
                            <span className="">Log in with Facebook</span>
                        </button>
                        <div className="forgot-password" >Forgot password?</div>
                    </div>
                </form>
            </div>
            
            <div class="align-items-center box justify-content-center mt-2 m-auto pt-4 row">
                <p>Don't have an account? <a class="signup">Sign Up</a></p>
            </div>
        </div>
    )
}

export default Login;