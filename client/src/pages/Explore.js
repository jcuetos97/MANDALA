import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useQuery } from "@apollo/client";
import { QUERY_ITEMS } from "../utils/queries";

import Card from "../components/Card";
import Filter from "../assets/png/filter-ico.png";
import Profile from "../assets/png/user-ico.png";

import Auth from "../utils/auth";

import "../assets/css/explore.css";
import "../assets/css/general.css";

//import uploadService from "../utils/uploadService";

const Explore = () => {
    const [filterHide, setFilterHide] = useState("visible");

    const { loading, data } = useQuery(QUERY_ITEMS);
    const items = data?.items || [];

    if (loading) {
        return <div>Loading...</div>;
    }

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
                        <input type="checkbox" name="watercolor" />
                        <label htmlFor="watercolor">Watercolor</label>
                    </li>
                    <li className="navbar-explore-link">
                        <input type="checkbox" name="oil" />
                        <label htmlFor="oil">Oil</label>
                    </li>
                    <li className="navbar-explore-link">
                        <input type="checkbox" name="charcoal" />
                        <label htmlFor="charcoal">Charcoal & Pencils</label>
                    </li>
                    <li className="navbar-explore-link">
                        <input type="checkbox" name="acrylic" />
                        <label htmlFor="acrylic">Acrylic</label>
                    </li>
                    <li className="navbar-explore-link">
                        <input type="checkbox" name="mixedMedia" />
                        <label htmlFor="mixedMedia">Mixed Media</label>
                    </li>
                    <li className="navbar-explore-link">
                        <input type="checkbox" name="other" />
                        <label htmlFor="other">Other</label>
                    </li>
                </ul>
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

                {items && items.map((item) =>
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
                ))}
            </div>
        </div>
    );
};

export default Explore;
