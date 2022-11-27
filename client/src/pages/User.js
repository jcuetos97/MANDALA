import React, { useState, useEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { UPDATE_USER } from "../utils/mutations";
import { QUERY_ME } from "../utils/queries";
import { Link } from "react-router-dom";
import Edit from "../assets/png/edit-ico.png";



// CSS Style
import '../assets/css/general.css';
import '../assets/css/user.css';

const User = () => {
 
    
    const { data, loading } = useQuery(QUERY_ME);

    const user = data?.me || [];
    const [formState, setFormState] = useState({
        username: "Loading",
        email: "Loading",
        street: "Loading",
        city: "Loading",
        state: "Loading",
        country: "Loading",
        zip: "Loading"
      });  
  
      useEffect(() => {
        if(loading === false && data){
          setFormState({
            username: user.username,
            email: user.email,
            street: user.street,
            city: user.city,
            state: user.state,
            country: user.country,
            zip: user.zip
          });
        }
      }, [loading, data])
      
      const [disabled, setDisabled] = useState(true);
  
      const [ updateUser ] = useMutation(UPDATE_USER);
     
      const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
          ...formState,
          [name]: value,
        });
      };

      const handleFormSubmit = async (event) => {
        event.preventDefault();
      
        setDisabled(true);
        
        try {
          await updateUser({
            variables: { ...formState },
          });

        } catch (error) {
          console.error(error);
        }
      };

      return (
        <div className="user">
          <div className="user-container art">
              <h2>Art collection</h2>
              <li className="user-piece-collection">
                  <img src="" alt="" />
                  <p className="info-content-subtitle">The Night Watch</p> 
                  <h5>$34,000MXN</h5> 
              </li>   
              <li className="user-piece-collection">
                  <img src="" alt="" />
                  <p className="info-content-subtitle">The Night Watch</p> 
                  <h5>$34,000MXN</h5> 
              </li>  
              <Link to='/explore'>
                  <button type="submit" className="btn btn-art">See More</button>
              </Link> 
          </div>
          <div className="user-container info">
            <h2>Profile</h2>
            <a type="button" title="Edit" onClick={() => setDisabled(disabled===true ? false : true )}><img className="edit-icon" src={Edit} alt="Edit Profile" /> </a> 
            <img className="info-img" src="https://doodleipsum.com/700/hand-drawn?i=656e5bba23d76eae300a40faf5ee1c3f" alt="Sitting by Irene Falgueras" />  
            <form onSubmit={handleFormSubmit} className="info-content">      
                <p className="info-content-title">Username</p>
                <input className={disabled ? "info-content-disabled": "info-content-edit"} type="text" name="username" value={formState.username} onChange={handleChange} disabled={disabled}/>
                <p className="info-content-title">Email</p>
                <input className={disabled ? "info-content-disabled": "info-content-edit"} type="email" name="email" value={formState.email } onChange={handleChange} disabled={disabled}/>
                <p className="info-content-title">Street</p> 
                <input className={disabled ? "info-content-disabled": "info-content-edit"} type="text" name="street" value={formState.street} onChange={handleChange} disabled={disabled}/>
                <p className="info-content-title">City</p>
                <input className={disabled ? "info-content-disabled": "info-content-edit"} type="text" name="city" value={formState.city} onChange={handleChange} disabled={disabled}/>
                <p className="info-content-title">Country</p>
                <input className={disabled ? "info-content-disabled": "info-content-edit"} type="text" name="country" value={formState.country} onChange={handleChange} disabled={disabled}/>
                <p className="info-content-title">Zip Code</p>
                <input className={disabled ? "info-content-disabled": "info-content-edit"} type="text" name="zip" value={formState.zip} onChange={handleChange} disabled={disabled}/>
                <button type="submit" className={disabled ? "btn-disabled": "btn-save"}>Save</button>   
            </form>
          </div>
          <div className="user-container items">
            <h2>Art-at-sale</h2>
            <Link to='/sell'>
            <button type="submit" className="btn btn-explore">Sell Piece</button>
            </Link> 
            <ul>
              <li className="user-piece-at-sale">
                <p className="info-content-subtitle">The Starry Night</p> 
                <h5>$25,000MXN</h5> 
              </li>
              <li className="user-piece-at-sale">
                <p className="info-content-subtitle">The Night Watch</p> 
                <h5>$34,000MXN</h5> 
              </li>
              <li className="user-piece-at-sale">
                <p className="info-content-subtitle">Flaming June</p> 
                <h5>$12,000MXN</h5> 
              </li>
            </ul>
          </div>
      </div>
  );
};



export default User;