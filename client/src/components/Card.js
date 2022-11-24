import React from "react";

import "../assets/css/general.css";
import "../assets/css/explore.css";
import Checkout from "./Checkout";


const Card = ({ image, author, title, description, id, price }) => {
    return (
        <div className="card">
            <div className="card-image-container">
                <img className="card-image-top" src={image} alt={title} />
            </div>

            <div className="card-body">
                <div className="card-body-content">
                    <h4 className="card-title">{title} <span className="card-title-author">- By {author}</span> </h4>
                    <h5 className="card-text">{description}</h5>
                    <p className="card-text">{price}</p>
                    <button className="btn-add" onClick={() => console.log(`Add to cart ID: ${id}`)}>Add to Cart</button>
                </div>

            </div>
        </div>
    )
};

export default Card;