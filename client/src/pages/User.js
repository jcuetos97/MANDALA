import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faXmark, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

// CSS Style
import '../assets/css/general.css';
import '../assets/css/user.css';

library.add(faXmark, faPenToSquare);

const User = () => {
    return (
        <div className="user">
            <div className="user-content">
                <div className="user-container art">
                    <h3>art collection</h3>
                    <div className="art-content">
                    
                    </div>
                    <Link to='/explore'>
                    <button type="submit" className="btn-art">See More</button>
                    </Link>    
                </div>

                <div className="user-container info">
                    <h1>Profile</h1>
                    <div><img className="info-img" src="https://doodleipsum.com/700/hand-drawn?i=656e5bba23d76eae300a40faf5ee1c3f" alt="Sitting by Irene Falgueras" /></div>
                    <FontAwesomeIcon className="edit-icon" icon="pen-to-square" size="lg"/>
                </div>

                <div className="user-container items">
                    <h3>Art-at-sale</h3>
                    <button type="submit" className="btn-explore">Sell Piece</button>
                </div>

            </div>
           
        </div>
    );
};



export default User;