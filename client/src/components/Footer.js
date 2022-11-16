import React from 'react';

// CSS Style
import '../assets/css/general.css';
import '../assets/css/footer.css';

// Icons
import GitHub from '../assets/png/github-ico.png';
import Discord from '../assets/png/discord-ico.png';
import Instagram from '../assets/png/instagram-ico.png';
import Youtube from '../assets/png/youtube-ico.png';
import LinkedIn from '../assets/png/linkedin-ico.png';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-upper'>
                <div className='row1'>
                <a target="_blank" rel="noreferrer" href="https://www.discord.com">
                    <img className='icon' src={Discord} alt="icon"/>
                </a>
                <a target="_blank" rel="noreferrer" href="https://linkedin.com">
                    <img className='icon' src={LinkedIn} alt='icon'/>
                </a>
                <a target="_blank" rel="noreferrer" href="https://github.com/jcuetos97/MARKETPLACE">
                    <img className='icon' src={GitHub} alt='icon'/>
                </a>      
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com">
                    <img className='icon' src={Instagram} alt="icon"/>
                </a>
                <a target="_blank" rel="noreferrer" href="https://www.youtube.com">
                    <img className='icon' src={Youtube} alt="icon"/>
                </a>
                </div>
                <div className='row2'>
                    <ul>
                        <li>Community guidelines</li>
                        <li>Help Center</li>
                        <li>Terms of service</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;