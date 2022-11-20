import React from "react";
import Card from "../components/Card";
import image from "../assets/jpeg/homeimage.jpeg";

import "../assets/css/explore.css";
import "../assets/css/general.css";

const Explore = () => {
    return (
        <div>
            <nav className="navbar-explore">
                <div class="container-fluid">
                    <ul className="header-links-explore">
                        <li className="header-link-explore">
                                Top 5 pieces
                        </li>
                        <li className="header-link-explore">
                                Top 5 Artists
                        </li>
                        <li className="header-link-explore">
                            All Categories
                        </li>
                    </ul>
                </div> 
            </nav>
            <div className="cards-container">
                <Card
                image= {image}
                title= "TEST"
                description= "DESC"
                id= "asd"
                price= "$20.00"
                />
                <Card
                image= {image}
                title= "TEST"
                description= "DESC"
                id= "asd"
                price= "$20.00"
                />
                <Card
                image= {image}
                title= "TEST"
                description= "DESC"
                id= "asd"
                price= "$20.00"
                />
                <Card
                image= {image}
                title= "TEST"
                description= "DESC"
                id= "asd"
                price= "$20.00"
                />
                <Card
                image= {image}
                title= "TEST"
                description= "DESC"
                id= "asd"
                price= "$20.00"
                />
                <Card
                image= {image}
                title= "TEST"
                description= "DESC"
                id= "asd"
                price= "$20.00"
                />
            </div>   
        </div>
    );
};

export default Explore;
