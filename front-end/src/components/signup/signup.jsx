import React from "react";
import "bootstrap/dist/css/bootstrap.css"
import "./signup.css"

const Signup = ()=>{
    return(
        <div className="headbox pt-3">
            <div className="row align-items-center box justify-content-center m-auto">
                <div className="heading"> </div>
                <div className=" mb-3 mt-2">Sign up to see photos and videos from your friends.</div>
                <form className="signup-form">
                    <div className="field">
                        <input id="email" type="Email" placeholder="Email" name="email"/>
                        <label for="email">Email</label>
                    </div>
                    <div className="field">
                        <input id="name" type="Full Name" placeholder="Full Name" name="name"/>
                        <label for="Full Name">Full Name</label>
                    </div>
                    <div className="field">
                        <input id="username" type="name" placeholder="Username" name="username"/>
                        <label for="username">Username</label>
                    </div>
                    <div className="field">
                        <input id="password" type="password" placeholder="Password" name="password"/>
                        <label for="password">Password</label>
                    </div>
                    <div className="field">
                        <input id="Confirm Password" type="password" placeholder="Confirm Password" name="confPassword"/>
                        <label for="Confirm Password">Confirm Password</label>
                    </div>
                    <p className="term">People who use our service may have uploaded your contact information to Instagram. Learn More</p>
                    <p className="term">By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .</p>
                    <button className="signup-button mb-3" title="Signup">Sign Up</button>
                    <div className="mt-4 align-items-center justify-content-center">                        
                        <div className="hr"><hr/></div>
                        <div className="or">OR</div>
                    </div>
                    <div className="other">
                        <button className="fb-signup-btn" type="button">
                            <i className="fa fa-facebook-official fb-icon"></i>
                            <span className="">Log in with Facebook</span>
                        </button>
                        <div className="forgot-password" >Forgot password?</div>
                    </div>
                </form>
            </div>
            
            <div class="align-items-center box justify-content-center mt-2 m-auto pt-4 row">
                <p>Have an account? <a class="signup">Log in</a></p>
            </div>
        </div>
    )
}

export default Signup;