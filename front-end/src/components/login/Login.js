import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css"
import "./login.css"
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/actions/users";

const Login = () => {
    const initialUserState = {
        username: '',
        password: '',
    }

    const dispatch = useDispatch();
    const [user, setUser] = useState(initialUserState);

    const onFieldChange = e => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const createUser = () => {
            dispatch(loginUser(user));
    };

    return (
        <div className="headbox pt-3">
            <div className="row align-items-center box justify-content-center m-auto">
                <div className="heading mb-5"> </div>
                <form className="login-form">
                    <div className="field">
                        <input name="username" value={user.username} onChange={onFieldChange}
                            id="username" type="name" placeholder="Phone number, username, or email" />
                        <label for="username">Phone number, username, or email</label>
                    </div>
                    <div className="field">
                        <input name="password" value={user.password} onChange={onFieldChange}
                            id="password" type="password" placeholder="Password" />
                        <label for="password">Password</label>
                    </div>
                    <button className="login-button mb-3" title="login"
                    disabled="" onClick={createUser}>Log In</button>
                    <div className="mt-4 align-items-center justify-content-center">
                        <div className="hr"><hr /></div>
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

            <div className="align-items-center box justify-content-center mt-2 m-auto pt-4 row">
                <p>Don't have an account? <Link to="/signup"><span className="signup">Sign Up</span></Link></p>
            </div>
        </div>
    )
}

export default Login;