import React, { useState } from "react";
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

// CSS Style
import '../assets/css/general.css';
import '../assets/css/signin.css';

const LoginIn = () => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN_USER);

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
        const { data } = await login({
            variables: { ...formState },
        });

        Auth.login(data.login.token);
        } catch (e) {
        console.error(e);
        }

        setFormState({
        email: '',
        password: '',
        });
    };
        
    return (
            <div className="form-containter">   
                <div className="form-containter-title">
                    <h1>Welcome Back!</h1>
                </div>
                <form onSubmit={handleFormSubmit}>
                    <div className="field-wrap">
                        <label>Email </label>
                        <input 
                        placeholder="Your email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        required />
                    </div>
        
                    <div class="field-wrap">
                        <label>Password</label>
                        <input 
                        placeholder="******"
                        name="password"
                        type="password" 
                        value={formState.password}
                        onChange={handleChange}
                        required />
                    </div>

                    <div className="button-started-container">
                        <button type="submit" className="btn button-animated">Log In</button>
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

export default LoginIn;