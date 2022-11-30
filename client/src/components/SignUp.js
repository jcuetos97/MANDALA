import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";

import Auth from "../utils/auth";


// CSS Style
import "../assets/css/general.css";
import "../assets/css/signin.css";

const SignUp = () => {
    const [formState, setFormState] = useState({
        username: "",
        email: "",
        password: "",
      });
      const [addUser, { error }] = useMutation(ADD_USER);
    
      const handleChange = (event) => {
        const { name, value } = event.target;
    
        setFormState({
          ...formState,
          [name]: value,
        });
      };
    
      const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
    
        try {
          const { data } = await addUser({
            variables: { ...formState },
          });
    
          Auth.login(data.addUser.token);
        } catch (e) {
          console.error(e);
        }
      };

    return ( 
            <div className="form-containter">   
                <div className="form-containter-title">
                    <h1>Sign Up for Free</h1>
                </div>
                <form onSubmit={handleFormSubmit}>
                    <div className="field-wrap">
                        <label>Name</label>
                        <input 
                            value={formState.name}
                            onChange={handleChange}
                            placeholder="Your username..."
                            name="username"
                            type="text"
                            required />
                    </div>
                    <div className="field-wrap">
                        <label>Email </label>
                        <input 
                            value={formState.email}
                            onChange={handleChange}
                            placeholder="Your email..."
                            name="email"
                            type="email"
                            required />
                    </div>
                    <div className="field-wrap">
                        <label>Password</label>
                        <input 
                            value={formState.password}
                            onChange={handleChange}
                            placeholder="******"
                            name="password"
                            type="password" 
                            required />
                    </div>
                    <div className="button-started-container">
                        <button type="submit" className="btn button-animated">Sign Up</button>
                    </div>
                </form>
                    
                {error && (
                    <div>
                    <br />
                    {error.message}
                    </div>
                    )}
            </div>
    );
};



export default SignUp;















