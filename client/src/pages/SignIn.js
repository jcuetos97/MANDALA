import React from "react";

// CSS Style
import '../assets/css/general.css';
import '../assets/css/signin.css';

const SignIn = () => {
    return (
        <div className="form">
            <ul className="tab-group">
                <li className="tab active"><a href="#signup">Sign Up</a></li>
                <li className="tab"><a href="#login">Log In</a></li>
            </ul>
            <div className="tab-content">
                <div id="signup">   
                    <h1>Sign Up for Free</h1>
                    <form action="/" method="post">
                        <div className="top-row">
                            <div className="field-wrap">
                                <label>
                                    Name<span class="req">*</span>
                                </label>
                                <input type="text"required autocomplete="off"/>
                            </div>
                        </div>

                        <div className="field-wrap">
                            <label>
                            Email Address<span class="req">*</span>
                            </label>
                            <input type="email"required autocomplete="off"/>
                        </div>
            
                        <div class="field-wrap">
                            <label>
                            Set A Password<span className="req">*</span>
                            </label>
                            <input type="password"required autocomplete="off"/>
                        </div>
                        <button type="submit" className="button button-block">Get Started</button>
                    </form>
                </div>
            </div> 
        </div> 
    );
};



export default SignIn;