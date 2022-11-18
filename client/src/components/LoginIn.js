import React from "react";

// CSS Style
import '../assets/css/general.css';
import '../assets/css/signin.css';

const LoginIn = () => {
    return (
            <div className="form-containter">   
                <div className="form-containter-title">
                    <h1>Welcome Back!</h1>
                </div>
                <form action="/" method="post">
                    
                    <div className="field-wrap">
                        <label>Email </label>
                        <input type="email"required autocomplete="off"/>
                    </div>
        
                    <div class="field-wrap">
                        <label>Password</label>
                        <input type="password" required autocomplete="off"/>
                    </div>

                    <div className="button-started-container">
                        <button type="submit" className="btn button-animated">Log In</button>
                    </div>
                </form>
            </div>
    );
};

export default LoginIn;