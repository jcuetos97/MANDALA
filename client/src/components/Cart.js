import React from "react";

import "../assets/css/general.css";
import "../assets/css/cart.css";


const Cart = () => {

    return (
        <div className="card-cart">  
            <div>
                <div>
                    <h4 className="card-title">title</h4>
                    <span className="card-title-author">author</span> 
                    <h5 className="card-text">description</h5>
                    <p className="card-text">price</p>
                    <button className="btn">Checkout</button>
                </div>   
            </div>
        </div>
    )
};

export default Cart;