import React from "react";
import { useMutation } from "@apollo/client";

import { ADD_TO_CART } from "../utils/mutations";
import { QUERY_CART_ITEMS, QUERY_SINGLE_ITEM } from "../utils/queries";

import "../assets/css/general.css";
import "../assets/css/explore.css";


const Card = ({ image, author, title, description, id, price }) => {
    const numFor = Intl.NumberFormat('en-US');
   
    const [addToCart] = useMutation(ADD_TO_CART, {
        variables: { itemId: id },
        refetchQueries: [
            { query: QUERY_CART_ITEMS },
            { query: QUERY_SINGLE_ITEM }
        ]
    },);


    return (
        <div className="card">
            <div className="card-image-container">
                <img className="card-image-top" src={image} alt={title} />
            </div>
            <div className="card-body">
                <div className="card-body-content">
                    <h4 className="card-title">{title}</h4>
                    <span className="card-title-author">- By {author}</span>
                    <p className="card-text-description">{description}</p>
                    <h4 className="card-text-price"><span>$</span>{numFor.format(price)}<span> MXN</span></h4>
                    <button className="btn-add" onClick={addToCart}>Add to cart</button>
                </div>
            </div>
        </div>
    )
};

export default Card;