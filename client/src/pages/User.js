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
                    <h2>art collection</h2>
                    <li className="user-piece-collection">
                        <img src="" alt="" />
                        <p className="info-content-subtitle">The Night Watch</p> 
                        <h5>$34,000MXN</h5> 
                    </li>   
                    <li className="user-piece-collection">
                        <img src="" alt="" />
                        <p className="info-content-subtitle">The Night Watch</p> 
                        <h5>$34,000MXN</h5> 
                    </li>  
                    <Link to='/explore'>
                        <button type="submit" className="btn btn-art">See More</button>
                    </Link> 
                </div>

                <div className="user-container info">
                    <h2>Profile</h2>
                    <div><img className="info-img" src="https://doodleipsum.com/700/hand-drawn?i=656e5bba23d76eae300a40faf5ee1c3f" alt="Sitting by Irene Falgueras" /></div>
                    <FontAwesomeIcon className="edit-icon" icon="pen-to-square" size="lg"/>
                    <div className="info-content">
                        <p className="info-content-title">Name</p>
                        <p className="info-content-subtitle">Juan José Espinosa C.</p>
                        <p className="info-content-title">Adress</p>
                        <p className="info-content-subtitle">Av. José Vasconcelos 345-L-116, Santa Engracia, 66267 San Pedro Garza García, N.L.</p>
                        <p className="info-content-title">Art Collection</p>
                        <p>7 pieces </p>
                    </div>
                   
                </div>

                <div className="user-container items">
                    <h2>Art-at-sale</h2>
                    <Link to='/sell'>
                    <button type="submit" className="btn btn-explore">Sell Piece</button>
                    </Link> 
                    <ul>
                        <li className="user-piece-at-sale">
                            <p className="info-content-subtitle">The Starry Night</p> 
                            <h5>$25,000MXN</h5> 
                        </li>
                        <li className="user-piece-at-sale">
                            <p className="info-content-subtitle">The Night Watch</p> 
                            <h5>$34,000MXN</h5> 
                        </li>
                        <li className="user-piece-at-sale">
                            <p className="info-content-subtitle">Flaming June</p> 
                            <h5>$12,000MXN</h5> 
                        </li>
                    </ul>
                </div>
        </div>
    );
};



export default User;