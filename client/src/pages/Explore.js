import React, {useState} from "react";
import { Link } from 'react-router-dom';

import Card from "../components/Card";
import image from "../assets/jpeg/homeimage.jpeg";
import Filter from "../assets/png/filter-ico.png";
import Profile from "../assets/png/user-ico.png"

import "../assets/css/explore.css";
import "../assets/css/general.css";

const Explore = () => {
    const [filterHide, setFilterHide]= useState("visible");

    return (
        <div className="explore">
            <nav className="navbar-explore">
                <div className="navbar-explore-filter">
                    <Link to="/user">
                        <img src={Profile} alt="User" className="filter-icon" />
                    </Link>
                    <p className={filterHide === "hidden" ? "hide" : "show"}> My Profile</p>
                </div> 
                <div className="navbar-explore-filter">
                    <a onClick={() => setFilterHide(filterHide === "hidden" ? "visible" : "hidden")}>
                    <img src={Filter} alt="Filter" className="filter-icon" />
                    </a>
                    <p className={filterHide === "hidden" ? "hide" : "show"}> Hide filters</p>
                </div>     
                <h3 className={filterHide === "hidden" ? "hide" : "navbar-explore-title"}>Filters & Categories</h3> 
                    <ul className={filterHide === "hidden" ? "hide" : "show"}>
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
                    <h3 className={filterHide === "hidden" ? "hide" : "navbar-explore-title"}>Tags</h3>
                    <div className={filterHide === "hidden" ? "hide" : "show"}>
                        <ul className="navbar-explore-tags">
                            <li className="tag">Surrealism</li>
                            <li className="tag">Abstract</li>
                            <li className="tag">Pop Art</li>
                            <li className="tag">Modernism</li>
                            <li className="tag">Realism</li>
                            <li className="tag">Landscape</li>
                            <li className="tag">Portrait</li>
                            <li className="tag">Animals</li>
                        </ul>
                    </div>
            </nav>
            <div className="cards-container">
                <div className="cards-container-header">
                    <h1>Explore</h1>
                    <h4>Discover the latest artwork...</h4>
                </div>
                <Card
                image= {image}
                author= "Van Gogh" 
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
