import React, {useState} from 'react';
import Logo from '../assets/png/logo.png';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_CART_ITEMS } from '../utils/queries';
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import Auth from '../utils/auth';
import Cart from './Cart'

// CSS Style
import '../assets/css/header.css';
import '../assets/css/general.css';

// Images
import ShopCart from '../assets/png/shopping-cart.png';
import HamMenu from '../assets/svg/ham-menu.svg';
import HamMenuClose from '../assets/svg/ham-menu-close.svg';



library.add(faMagnifyingGlass);

const Header = () => {
    const { data } = useQuery(QUERY_CART_ITEMS);

    const [headerMenu, setHeaderMenu] = useState('close');
    const [shopCart, setShopCart] = useState('hidden');

    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };
    console.log(data?.cartItems?.cart);
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
                    {Auth.loggedIn() ? (
                         <>
                         <li className='header-link-wrapper'>
                             <Link to='/user'>
                             <span className='header-link'>My Profile</span>
                             </Link>
                         </li>
                         <li className='header-link-wrapper'>
                             <Link to='/explore'>
                                 <span className='header-link'>Explore</span>
                             </Link>
                         </li>
                         <li className='header-link-wrapper'>
                             <span className='header-link' onClick={logout}>Logout</span>
                         </li>
                         <li className={shopCart === "visible" ? "shop-wrapper wrapper--active" : "shop-wrapper" }>
                             <button onClick={() => setShopCart(shopCart === "hidden" ? "visible" : "hidden")}>
                                 <img className = "shop-cart"  src={ShopCart} alt="Shop Cart Icon"/>
                                 <div className = {data?.cartItems?.cart.length === 0 ? "": "shop-cart-dot"}></div>
                             </button>
                         </li>
                         </>
                    ) : (
                        <>
                        <li className='header-link-wrapper'>
                            <Link to='/'>
                                <span className='header-link'>About</span>
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
                            <Link to='/signForm'>
                                <img className="shop-cart" src={ShopCart} alt="Shop Cart Icon" />
                            </Link>
                        </li>
                        </>
                         )}
                    </ul>
                </div>
                <div className="header-ham-menu-container">
                    <button  onClick={() => setHeaderMenu('open')}>
                        <img src={HamMenu} alt="hamburger menu" className={headerMenu === "close" ? "header-ham-menu": "header-ham-menu-inactive"}/>
                    </button>
                    <button  onClick={() => setHeaderMenu('close')}>
                        <img src={HamMenuClose} alt="hamburger menu close" className={headerMenu === "open" ? "header-ham-menu-close": "header-ham-menu-inactive"}/>
                    </button>
                </div>
            </div>
            <div className={headerMenu === "open" ? "header-sm-menu active" : "header-sm-menu" }>
                <div className="header-sm-menu-content">
                    <ul className="header-sm-menu-links">
                    {Auth.loggedIn() ? (
                        <>
                        <li className='header-sm-menu-link'>
                            <Link to='/user'>
                            <span className='header-link'>My Profile</span>
                            </Link>
                        </li>
                        <li className='header-sm-menu-link'>
                            <Link to='/explore'>
                                <span className='header-link'>Explore</span>
                            </Link>
                        </li>
                        <li className='header-sm-menu-link'>
                            <span className='header-link' onClick={logout}>Logout</span>
                        </li>
                        <li className={shopCart === "visible" ? "header-sm-menu-link wrapper--active" : "header-sm-menu-link shop-wrapper" }>
                            <button onClick={() => setShopCart(shopCart === "hidden" ? "visible" : "hidden")}>
                                <img className = "shop-cart"  src={ShopCart} alt="Shop Cart Icon"/>
                                <div className = {data?.cartItems?.cart.length === 0 ? "": "shop-cart-dot"}></div>
                            </button>
                        </li>
                        </>
                        ) : (
                        <>
                         <li className="header-sm-menu-link">
                            <Link to='/'>
                                <span className='header-link'>About</span>
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
                        </>
                        )}
                    </ul>
                </div>
            </div>
            {Auth.loggedIn() ? (
            <>
            {shopCart === "visible" ? <Cart></Cart> : "" }
            </>
            ):(
            <>
            </>
            )}
        </header>
    );
};


export default Header;


