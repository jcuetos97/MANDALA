import React, {useState} from 'react';
import Logo from '../assets/png/logo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";



// CSS Style
import '../assets/css/header.css';
import '../assets/css/general.css';

// Images
import ShopCart from '../assets/png/shopping-cart.png';
import HamMenu from '../assets/svg/ham-menu.svg';
import HamMenuClose from '../assets/svg/ham-menu-close.svg';

library.add(faMagnifyingGlass);

const Header = () => {

    const [headerMenu, setHeaderMenu] = useState('close');
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
                    <div className='search-bar'>
                        <FontAwesomeIcon className='search-icon' icon="magnifying-glass"/>
                        <input type="text" name="search"/> 
                    </div>
                </div>
                <div className='header-main'>
                    <ul className='header-links'>
                        <li className='header-link-wrapper'>
                            <Link to='/'>
                                <span className='header-link'>About</span>
                            </Link>
                        </li>
                        <li className='header-link-wrapper'>
                            <Link to='/user'>
                                <span className='header-link'>User</span>
                            </Link>
                        </li>
                        <li className='header-link-wrapper'>
                            <Link to='/explore'>
                                <span className='header-link'>Explore</span>
                            </Link>
                        </li>
                        <li className='header-link-wrapper'>
                            <Link to='/signForm'>
                                <span className='header-link'>Sign In</span>
                            </Link>
                        </li>
                        <li className="shop-wrapper">
                            <Link to="/explore">
                                <img className="shopCart" src={ShopCart} alt="Shop Cart Icon" />
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="header-ham-menu-container">
                    <a href="#" onClick={()=> setHeaderMenu('open') }>
                        <img src={HamMenu} alt="hamburger menu" className={headerMenu === "close" ? "header-ham-menu": "header-ham-menu-inactive"}/>
                    </a>
                    <a href="#" onClick={()=> setHeaderMenu('close') }>
                        <img src={HamMenuClose} alt="hamburger menu close" className={headerMenu === "open" ? "header-ham-menu-close": "header-ham-menu-inactive"}/>
                    </a>
                </div>
            </div>
            <div className={headerMenu === "open" ? "header-sm-menu active" : "header-sm-menu" }>
                <div className="header-sm-menu-content">
                    <ul className="header-sm-menu-links">
                        <li className="header-sm-menu-link">
                            <Link to='/user'>
                                <span className='header-link'>User</span>
                            </Link>
                        </li>
                        <li className="header-sm-menu-link">
                            <Link to='/explore'>
                                <span className='header-link'>Explore</span>
                            </Link>
                        </li>
                        <li className="header-sm-menu-link">
                            <Link to='/signForm'>
                                <span className='header-link'>Sign In</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};


export default Header;


