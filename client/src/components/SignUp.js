import React from "react";

// CSS Style
import '../assets/css/general.css';
import '../assets/css/signin.css';

const SignUp = () => {
    return (
            <div className="form-containter">   
                <div className="form-containter-title">
                    <h1>Sign Up for Free</h1>
                </div>
                <form action="/" method="post">
                    <div className="field-wrap">
                        <label>Name</label>
                        <input type="text"required autocomplete="off"/>
                    </div>
                    
                    <div className="field-wrap">
                        <label>Email </label>
                        <input type="email"required autocomplete="off"/>
                    </div>
        
                    <div className="field-wrap">
                        <label>Password</label>
                        <input type="password" required autocomplete="off"/>
                    </div>

                    <div className="button-started-container">
                        <button type="submit" className="btn button-animated">Sign Up</button>
                    </div>
                </form>
            </div>
    );
};



export default SignUp;















