import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_ITEMS_BY_MEDIUM } from "../utils/queries";

import Card from "../components/Card";
import Filter from "../assets/png/filter-ico-light.png";
import Profile from "../assets/png/user-ico-light.png";
import PriceRange from "../components/PriceRange";
import Auth from "../utils/auth";

import "../assets/css/explore.css";
import "../assets/css/general.css";


const Explore = () => {
    const [range, setValue] = useState([1000,110000]);
    const [medium, setMedium] = useState("");
    const [filterHide, setFilterHide] = useState("visible");
    
    
    const rangeSelector = (event, newValue) => {
        setValue(newValue);  
    };

    const { data } = useQuery(QUERY_ITEMS_BY_MEDIUM, {
        variables: { medium, range },
        pollInterval: 500,
    });
    
    const items = data?.itemsByMedium || [];
   
    return (
        <div className="explore">
            <nav className="navbar-explore">
                <div className="navbar-explore-filters-container">
                    {Auth.loggedIn() ? (
                        <div className="navbar-explore-filter">
                            <Link to="/user">
                                <img src={Profile} alt="User" className="filter-icon" />
                            </Link>

                            <p className={filterHide === "hidden" ? "hide" : "show"}> My Profile</p>
                        </div>
                    ) : ("")}
                    <div className="navbar-explore-filter">
                        <a onClick={() => setFilterHide(filterHide === "hidden" ? "visible" : "hidden")}>
                            <img src={Filter} alt="Filter" className="filter-icon" />
                        </a>
                        <p className={filterHide === "hidden" ? "hide" : "show"}> Hide filters</p>
                    </div>
                </div>
                <h3 className={filterHide === "hidden" ? "hide" : "navbar-explore-title"}>Medium</h3>
                <ul className={filterHide === "hidden" ? "hide" : "navbar-explore-links"}>
                    <li className="navbar-explore-link">
                        <input type="radio" name="medium" onClick={() => setMedium("")} />
                        <label htmlFor="all">All</label>
                    </li>
                    <li className="navbar-explore-link">
                        <input type="radio" name="medium" onClick={() => setMedium("Watercolor")} />
                        <label htmlFor="watercolor">Watercolor</label>
                    </li>
                    <li className="navbar-explore-link">
                        <input type="radio" name="medium" onClick={() => setMedium("Oil")} />
                        <label htmlFor="oil">Oil</label>
                    </li>
                    <li className="navbar-explore-link">
                        <input type="radio" name="medium" onClick={() => setMedium("Charcoal and Pencils")} />
                        <label htmlFor="charcoal">Charcoal & Pencils</label>
                    </li>
                    <li className="navbar-explore-link">
                        <input type="radio" name="medium" onClick={() => setMedium("Acrylic")} />
                        <label htmlFor="acrylic">Acrylic</label>
                    </li>
                    <li className="navbar-explore-link">
                        <input type="radio" name="medium" onClick={() => setMedium("Mixed Media")} />
                        <label htmlFor="mixedMedia">Mixed Media</label>
                    </li>
                    <li className="navbar-explore-link">
                        <input type="radio" name="medium" onClick={() => setMedium("Other")} />
                        <label htmlFor="other">Other</label>
                    </li>
                </ul>  
                <h3 className={filterHide === "hidden" ? "hide" : "navbar-explore-title"}>Price Range</h3>
                <PriceRange range={range} rangeSelector={rangeSelector} filterHide={filterHide}/>              
            </nav>
            <div className="cards-container">
                <div className="cards-container-header">
                    <div>
                        <h1>Explore</h1>
                        <h4>Discover the latest artwork...</h4>
                    </div>
                    <Link to="/sell">
                        <button className="btn">Publish artwork</button>
                    </Link>
                </div>

                {items && items.length !==0 ? items.map((item) =>
                (<Card
                    key={item._id}
                    image={item.image}
                    author={item.author}
                    title={item.title}
                    description={item.description}
                    medium={item.medium}
                    id={item._id}
                    price={item.price}
                />
                )):(
                    <div className="error-message">
                        <p>Sorry! No artwork available... </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Explore;
