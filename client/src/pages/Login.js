import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import {LOGIN_USER} from '../utils/mutations';

import Auth from '../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);


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
    } catch(e) {
      console.error(e);
    }

    //Le damos los valores de este objeto 
    setFormState({
      email: '',
      password: '',
    });
  };


  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2">Login</h4>
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <input type="email" class="form-input" 
                value={formState.email} 
                onChange={handleChange} 
                placeholder="Enter email"/>

              <input type="password" class="form-input" 
              value={formState.password} 
              onChange={handleChange} 
              className="form-input" 
              placeholder="********"
              name="password"/>

             <button type="submit" className="btn btn-primary" 
             style={{ cursor: 'pointer' }}>Submit</button>
              </form>
            )}


             {error && (
               <div className='my-3 p-3 bg-danger text-white'>
                 {error.message}
               </div> 
              )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;