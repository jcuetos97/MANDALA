import React from "react";

import "../assets/css/general.css";
import "../assets/css/explore.css";


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
                    <div className="btn-add"  >
                        <button onClick={fetchdata}>Add to Cart</button>
                    </div>
                </div>

            </div>
        </div>
    )
};
function fetchdata() {
    var data = { "price_ID": "price_1M4whsJL7p827Ta0DKuJFcBR" };
    console.log(data, "data");
    fetch('/create-checkout-session', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((res) => res.json())

        .then((data) => console.log(data, "data2"))

};
export default Card;