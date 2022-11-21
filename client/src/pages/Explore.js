import React, {useState} from "react";


import Card from "../components/Card";
import image from "../assets/jpeg/homeimage.jpeg";
import Filter from "../assets/png/filter-ico.png";

import "../assets/css/explore.css";
import "../assets/css/general.css";

const Explore = () => {
    return (
        <div className="explore">
            <nav className="navbar-explore">
                <div className="navbar-explore-filter">
                    <img src={Filter} alt="Filter" className="filter-icon"/>
                    <p> Hide filters</p>
                </div>     
                <h3 className="navbar-explore-title">Filters & Categories</h3> 
                    <ul>
                        <li className="navbar-explore-link">
                            <input type="checkbox" name="pieces"/>
                            <label for="pieces">Top 5 Pieces</label>
                        </li>
                        <li className="navbar-explore-link">
                            <input type="checkbox" name="allCategories"/>
                            <label for="allCategories">All Categories</label>
                        </li>
                        <li className="navbar-explore-link">
                            <input type="checkbox" name="artists"/>
                            <label for="artists">Top 5 Artists</label>
                        </li>
                    </ul>
                    <div className="navbar-explore-tags">

                    </div>
            </nav>
            <div className="cards-container">
                <div className="cards-container-header">
                    <h1>Explore</h1>
                    <h4>Discover the latest artwork</h4>
                </div>
                <Card
                image= {image}
                title= "Starry Night"
                description= "The oil-on-canvas painting is dominated by a night sky roiling with chromatic blue swirls."
                id= "asd"
                price= "$2,000.00"
                />
                <Card
                image= {image}
                title= "TEST"
                description= "DESC"
                id= "asd"
                price= "$2,000.00"
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
