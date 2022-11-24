import React from "react";
import { useMutation } from "@apollo/client";

import { ADD_TO_CART } from "../utils/mutations";

import "../assets/css/general.css";
import "../assets/css/explore.css";


const Card = ({image,author,title,description,id,price}) => {
    
    const [addToCart, {error}] = useMutation(ADD_TO_CART);
    
    const handleFormSubmit = async (event) => {
        event.preventDefault();
    
        try {
          const data = await addToCart({
            variables: { image, author, title, description, id, price },
          });
        } catch (err) {
          console.error(err);
        }
      };

    return (
        <div className="card">
            <div className="card-image-container">
                <img className="card-image-top" src={image} alt={title}/>
            </div>
            
            <div className="card-body">
                <div className="card-body-content">
                    <h4 className="card-title">{title}</h4>
                    <span className="card-title-author">- By {author}</span> 
                    <h5 className="card-text">{description}</h5>
                    <p className="card-text"><span>$</span>{price}<span>MXN</span></p>
                    <button className="btn-add" onClick={handleFormSubmit}>Add to Cart</button>
                </div>   
            </div>
        </div>
    )
};

export default Card;