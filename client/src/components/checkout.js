import React, { useState, useEffect } from "react";
//import "./App.css";



const ProductDisplay = () => (
    <section>
        <div className="product">
            <img
                src="https://i.imgur.com/EHyR2nP.png"
                alt="The cover of Stubborn Attachments"
            />
            <div className="description">
                <h3>Stubborn Attachments</h3>
                <h5>$20.00</h5>
            </div>
        </div>
        <div action="http://localhost:3001/create-checkout-session" >
            <button onClick={fetchdata}>
                Checkout
            </button>
        </div>
    </section >
);

function fetchdata() {
    var data = { "price_ID": "price_1M4whsJL7p827Ta0DKuJFcBR" };

    fetch('/create-checkout-session', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((res) => res.json())
        .then((data) => console.log(data, "data"));
}
const Message = ({ message }) => (
    <section>
        <p>{message}</p>
    </section>
);

export default function Checkout() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        // Check to see if this is a redirect back from Checkout
        const query = new URLSearchParams(window.location.search);

        if (query.get("success")) {

            //send email function
            setMessage("Order placed! You will receive an email confirmation.");
        }

        if (query.get("canceled")) {
            setMessage(
                "Order canceled -- continue to shop around and checkout when you're ready."
            );
        }
    }, []);

    return message ? (
        <Message message={message} />
    ) : (
        <ProductDisplay />
    );
}
