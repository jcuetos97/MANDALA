import React from "react";
import "../assets/css/explore.css";
import Card from "../components/Card";
import image from "../assets/jpeg/homeimage.jpeg";

const Explore = () => {
    return (
        <div>
            <h1>Explore</h1>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">
                                    Top 5 pieces
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#">
                                    Top 5 Artists
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active">All Categories</a>
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                            <input
                                class="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button class="btn btn-dark" type="submit">
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
            <Card
            image= {image}
            title= "TEST"
            description= "DESC"
            id= "asd"
            price= "$20.00"
            />
        </div>
    );
};

export default Explore;
