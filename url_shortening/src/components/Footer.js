import React from 'react'
import footerLogo from '../images/logo.svg'
import facebookLogo from '../images/icon-facebook.svg'
import instagramLogo from '../images/icon-instagram.svg'
import twitterLogo from '../images/icon-twitter.svg'
import pinterestLog from '../images/icon-pinterest.svg'
const Footer = () => {
    return (
        <div className='Footer'>
            <div className="logo">
                <div className="text-container">
                    <div className="title">Boost your links today</div>
                    <input type="button" value="Get Started" />
                </div>
            </div>
            <div className="footer-links">
                <div className="link-logo"><img src={footerLogo} alt="" /></div>
                <div className="links">
                    <ul>
                        <li className='headings'>Features</li>
                        <li>Link Shortening</li>
                        <li>Branded Links</li>
                        <li>Analytics</li>
                    </ul>
                    <ul>
                        <li className='headings'>Resources</li>
                        <li>Blog</li>
                        <li>Developers</li>
                        <li>support</li>
                    </ul>
                    <ul>
                        <li className='headings'>Company</li>
                        <li>About</li>
                        <li>Our Team</li>
                        <li>Careers</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="social-links">
                    <ul>
                        <li><img src={facebookLogo} alt="" /></li>
                        <li><img src={twitterLogo} alt="" /></li>
                        <li><img src={pinterestLog} alt="" /></li>
                        <li><img src={instagramLogo} alt="" /></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
