import React, { useState } from "react";
import SignUp from "../components/SignUp";
import LoginIn from "../components/LoginIn";


// CSS Style
import '../assets/css/general.css';
import '../assets/css/signin.css';

const SignForm = () => {
    
    const [currentPage, setCurrentPage] = useState('LogIn');

    const renderPage = () => {
        if (currentPage === 'LogIn') {
            return <LoginIn />;
        }
        if (currentPage === 'SignUp') {
            return <SignUp />;
        }

    };

    return (
        <div className="signin">
            <div className="container-img">
                <img className="signin-img" src="https://doodleipsum.com/700/hand-drawn?i=8a4e1603356335eab6df81c7fc520871" alt="Standing by Irene Falgueras" />
            </div>

            <div className="signin-content">
                <ul className="tab-group">
                    <li><a href="#signup" className={currentPage === 'SignUp' ? 'tab-active' : 'tab'} onClick={() => {setCurrentPage('SignUp')}}>Sign Up</a></li>
                    <li><a href="#login" className={currentPage === 'LogIn' ? 'tab-active' : 'tab'} onClick={() => {setCurrentPage('LogIn')}}>Log In</a></li>
                </ul>
                {renderPage()}
            </div>
        </div> 
    );
};



export default SignForm;