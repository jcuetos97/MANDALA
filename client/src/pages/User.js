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
                <div className="user-container art">
                    <h3>art collection</h3>
                    <img className="collection-img" src="https://doodleipsum.com/700/abstract?i=f8b1abea359b643310916a38aa0b0562" alt="Color Comp by Pablo Stanley" />
                    <Link to='/explore'>
                    <button type="submit" className="btn btn-art">See More</button>
                    </Link>    
                </div>

                <div className="user-container info">
                    <h1>Profile</h1>
                    <div><img className="info-img" src="https://doodleipsum.com/700/hand-drawn?i=656e5bba23d76eae300a40faf5ee1c3f" alt="Sitting by Irene Falgueras" /></div>
                    <FontAwesomeIcon className="edit-icon" icon="pen-to-square" size="lg"/>
                    <div className="info-content">
                        <h3 className="info-content-title">Name</h3>
                        <h3 className="info-content-subtitle">Juan José Espinosa C.</h3>
                        <h3 className="info-content-title">Adress</h3>
                        <h3>Av. José Vasconcelos 345-L-116, Santa Engracia, 66267 San Pedro Garza García, N.L.</h3>
                        <h3 className="info-content-title">Art Collection</h3>
                        <h3>7 pieces </h3>
                    </div>
                   
                </div>

                <div className="user-container items">
                    <h3>Art-at-sale</h3>
                    <Link to='/sell'>
                    <button type="submit" className="btn btn-explore">Sell Piece</button>
                    </Link> 
                </div>
        </div>
    );
};



export default User;