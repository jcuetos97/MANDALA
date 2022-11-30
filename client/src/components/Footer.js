import React from "react";
import { Link } from "react-router-dom";

// CSS Style
import "../assets/css/general.css";
import "../assets/css/footer.css";

// Icons
import GitHub from "../assets/png/github-ico.png";
import Discord from "../assets/png/discord-ico.png";
import Instagram from "../assets/png/instagram-ico.png";
import Youtube from "../assets/png/youtube-ico.png";
import LinkedIn from "../assets/png/linkedin-ico.png";
import LogoWhite from "../assets/png/logo-white.png";

const Footer = () => {
    return (
        <footer className="footer">

            <div className="footer-upper">
                <div className="upper-row">
                    <ul className="authors">
                        <h3>Authors</h3>
                        <li>Tere Quintero</li>
                        <li>Javier Contreras</li>
                        <li>Juan José Espinosa</li>
                        <li>Arnold Segovia</li>
                        <li>Eduardo Mince Cruz</li>
                        <li>Gabriela García</li>
                    </ul>
                </div>
                <div className="upper-row">
                    <ul className="authors">
                        <h3>Community</h3>
                        <li>Community guidelines</li>
                        <li>Help Center</li>
                        <li>Terms of service</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="upper-row">
                    <ul className="authors">
                        <h3>Actions</h3>
                        <Link to="/">
                            <li>About Mandala</li>
                        </Link>
                        <Link to="/explore">
                            <li>Explore More</li>
                        </Link>
                        <Link to="/signForm">
                            <li>Sign In</li>
                        </Link>
                    </ul>
                </div>
                <div className="upper-row">
                    <div>
                        <img src={LogoWhite} alt="Company Logo" className="footer-logo-img" />
                    </div>
                    <Link to="/">
                        <h1 className="footer-logo-title">man<br />da<br />la</h1>
                    </Link>

                </div>
            </div>

            <div className="footer-down">
                <div className="footer-row-icons">
                    <a target="_blank" rel="noreferrer" href="https://www.discord.com">
                        <img className="icon" src={Discord} alt="icon" />
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://linkedin.com">
                        <img className="icon" src={LinkedIn} alt="icon" />
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://github.com/jcuetos97/MARKETPLACE">
                        <img className="icon" src={GitHub} alt="icon" />
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com">
                        <img className="icon" src={Instagram} alt="icon" />
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://www.youtube.com">
                        <img className="icon" src={Youtube} alt="icon" />
                    </a>
                </div>
                <div className="footer-row-copyright">
                    <p>© Copyright 2022</p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;