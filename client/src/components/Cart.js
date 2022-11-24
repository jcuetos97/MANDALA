import React from "react";
import { useMutation, useQuery } from "@apollo/client";
import { DELETE_FROM_CART } from "../utils/mutations";
import { QUERY_CART_ITEMS } from "../utils/queries";
import "../assets/css/general.css";
import "../assets/css/cart.css";


const Cart = () => {


    return (
        <div className="card-cart">  
            <div>
                <div className="card-cart-row">
                    <h4>Shopping Cart</h4>
                    <button className="btn-remove-all">Remove All</button>
                </div>
                <div className="card-cart-row">
                    <div>
                        <h4 className="card-title">title</h4>
                        <span className="card-title-author">author</span>
                    </div>
                    <p>price</p>
                </div>   
                <div className="card-cart-subtotal card-cart-row">
                    <div>
                        <h2>Sub-Total</h2>
                        <p>#items</p>
                    </div>   
                    <h3>Price</h3>
                </div>
                <div className="card-cart-row">
                    <button className="btn">Checkout</button>
                </div>
                
            </div>
        </div>
    )
};

export default Cart;