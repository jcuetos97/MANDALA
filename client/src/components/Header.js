import React from 'react';
import Logo from '../assets/png/logo.png';
import { Link } from 'react-router-dom';

// CSS Style
import '../assets/css/header.css';
import '../assets/css/general.css';

import ShopCart from '../assets/png/shopping-cart.png' 

const Header = () => {
    return (
        <header className='header'>
            <div className='header-content'>
                <div className='header-logo-container'>
                    <div className='header-logo-img-cont'>
                        <img src={Logo} alt="Company Logo" className="header-logo-img"/>
                    </div>
                    <Link to='/'>
                    <p className='header-logo-title'>man<br/>da<br/>la</p>  
                    </Link>   
                </div>
                <div className='header-main'>
                    <ul className='header-links'>
                        <li className='header-link-wrapper'>
                            <Link to='/about'>
                            <span className='header-link'>About</span>
                            </Link>
                        </li>
                        <li className='header-link-wrapper'>
                            <Link to='/explore'>
                            <span className='header-link'>Explore</span>
                            </Link>
                        </li>
                        <li className='header-link-wrapper'>
                            <Link to='/about'>
                            <span className='header-link'>Sign In</span>
                            </Link>
                        </li>
                        <li className='shop-wrapper'>
                            <Link to='/about'>
                            <img className='shopCart' src={ShopCart} alt="Shop Cart Icon" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};


export default Header;


