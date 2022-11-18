import React from "react";
import { Link } from "react-router-dom";

// CSS Style
import "../assets/css/general.css";
import "../assets/css/home.css";


const Home = () => {

    return (
        <div className="home">
            <div className="container-1">
                <img className="home-doodle" src="https://doodleipsum.com/700/abstract?i=f701b63cfe38e57fa0408c238af32027" alt="Color Comp by Pablo Stanley" />
            </div>
            <div className="container-2">
                <div className="welcome-text">
                    <h1 className="home-main-title">Get inspired.</h1>
                    <br />
                    <h2 className="home-main-sub">Whether an artist or an art lover, this is the right place for you.</h2>   
                    <Link to="/signForm">
                    <button className="btn btn-start-now" > Start now</button>
                    </Link>
                </div>
            </div>  
        </div>
    );
};

export default Home;