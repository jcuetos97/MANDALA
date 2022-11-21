import React from "react";
import Card from "../components/Card";
import image from "../assets/jpeg/homeimage.jpeg";

import "../assets/css/explore.css";
import "../assets/css/general.css";

const Explore = () => {
    return (
        <div className="explore">
            <nav className="navbar-explore">
               <h3 className="navbar-explore-title">Filters & Categories</h3> 
                    <ul className="header-links-explore">
                        <li className="explore-link-explore">
                            <input type="checkbox" name="pieces"/>
                            <label for="pieces">Top 5 Pieces</label>
                        </li>
                        <li className="explore-link-explore">
                            <input type="checkbox" name="allCategories"/>
                            <label for="allCategories">All Categories</label>
                        </li>
                        <li className="explore-link-explore">
                            <input type="checkbox" name="artists"/>
                            <label for="artists">Top 5 Artists</label>
                        </li>
                    </ul>
            </nav>
            <div className="cards-container">
                <div className="cards-container-header">
                    <h1>Explore</h1>
                    <h4>Discover the latest artwork</h4>
                </div>
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
