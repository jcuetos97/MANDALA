import React from 'react';
import Logo from '../assets/png/logo.png';
import { Link } from 'react-router-dom';

import About from '../pages/About';
import Explore from '../pages/Explore';

// CSS Style
import '../assets/css/header.css';
import '../assets/css/general.css';

const Header = () => {
    return (
        <header className='header'>
            <div className='header-content'>
                <div className='header-logo-container'>
                    <div className='header-logo-img-cont'>
                        <img src={Logo} alt="Company Logo" className="header-logo-img"/>
                    </div>
                    <p className='header-logo-title'>man<br/>da<br/>la</p>     
                </div>
                <div className='header-main'>
                    <ul className='header-links'>
                        <li className='header-link-wrapper'>
                            <Link to={About}>
                            <span className='header-link'>About</span>
                            </Link>
                        </li>
                        <li className='header-link-wrapper'>
                            <Link to={Explore}>
                            <span className='header-link'>Explore</span>
                            </Link>
                        </li>
                        <li className='header-link-wrapper'>
                            <Link to={About}>
                            <span className='header-link'><strong>Sign In</strong></span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};


export default Header;


