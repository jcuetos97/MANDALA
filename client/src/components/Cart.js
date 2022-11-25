import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_CART_ITEMS } from "../utils/queries";
import { DELETE_FROM_CART } from "../utils/mutations";
import "../assets/css/general.css";
import "../assets/css/cart.css";

const Cart = () => {
    const numFor = Intl.NumberFormat('en-US');
    const [deleteFromCart] = useMutation(DELETE_FROM_CART, {
        refetchQueries: [
            { query: QUERY_CART_ITEMS }
        ]
    });
    const { data } = useQuery(QUERY_CART_ITEMS);

    const cart = data?.cartItems?.cart || [];
    const subtotal = [];
    const items = [];

    cart.map((item) => (subtotal.push(item.price)));
    cart.map((item) => (items.push(item)));

    const sum = subtotal.reduce((partialSum, a) => partialSum + a, 0);
    const totalItems = items.length;

    return (
        <div className="card-cart">
            <div>
                <div className="card-cart-row">
                    <h4>Shopping Cart</h4>
                    <button className="btn-remove-all">Remove All</button>
                </div>
                <ul>
                    {cart && cart.map((item) => (
                        <li className="card-cart-row" key={item._id}>
                            <div>
                                <h4 className="card-title">{item.title}
                                    <button className="btn-remove"
                                        onClick={() => deleteFromCart({ variables: { itemId: item._id } })}
                                    >
                                        Remove
                                    </button>
                                </h4>
                                <span className="card-title-author">{item.author}</span>
                            </div>
                            <p>${numFor.format(item.price)}.00</p>
                        </li>
                    ))}
                </ul>
                <div className="card-cart-subtotal card-cart-row">
                    <div>
                        <h2>Sub-Total</h2>
                        <p>{totalItems} items</p>
                    </div>
                    <h3>$ {numFor.format(sum)}.00<small> MXN</small></h3>
                </div>
                <div className="card-cart-row">
                    <button className="btn" onClick={fetchdata}>Checkout</button>
                </div>
            </div>
        </div>
    )
};
function fetchdata() {
    var data = { "price_ID": "price_1M4whsJL7p827Ta0DKuJFcBR" };
    console.log(data, "data");
    fetch('/create-checkout-session',
        {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((res) => res.json())

        .then((data) => window.open(data, "_blank"))

};
export default Cart;