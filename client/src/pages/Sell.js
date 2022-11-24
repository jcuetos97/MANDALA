import React from "react";
import { Link } from "react-router-dom";

import Auth from "../utils/auth";

// CSS Style
import "../assets/css/general.css";
import "../assets/css/sell.css";


const Sell = () => {

    return (
        <div className="sell"> 
            <div className="sell-form-containter">
            {Auth.loggedIn() ? (
                <form action="/" method="post">
                    <h2>Let the world discover your art!</h2>
                    <div className="field-wrap">
                        <label>Name </label>
                        <input type="text"required autocomplete="off"/>
                    </div>
                    <div class="field-wrap">
                        <label>Description (140 characters max)</label>
                        <textarea maxlength="140" name="description" rows="3" cols="50" required></textarea>
                    </div>
                    <div class="field-wrap">
                        <label>Price</label>
                        <input type="text" required autocomplete="off"/>
                    </div>
                    <div class="field-wrap">
                        <label>Tags</label>
                        <input type="tags" required autocomplete="off"/>
                    </div>
                    <div class="field-wrap">
                        <label>Image</label>
                        <input type="file" name="fileImg" required autocomplete="off"/>
                    </div>
                    <div className="button-started-container">
                        <button type="submit" className="btn button-animated">Publish</button>
                    </div>
                </form>
                ) : (
                    <>
                    <h3>Sorry! It seems that you are not logged in!</h3>
                    <p>Please <Link to="/signForm"><strong>sign in</strong></Link> to start discovering...</p>
                    </>
                )}
            </div>
        </div>
    );
};

export default Sell;