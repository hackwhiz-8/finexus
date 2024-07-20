import React from 'react'
import './FooterC.css';
import Logo from '../../assests/images/financial-planning-concept-illustration.png'

const Footer = () => {
    return (
        <footer className="footer bg-gray-900" >

            <div className="footer-section">
                <img src={Logo} alt="Logo" className="w-[100px]" />
                <p>&copy; 2023 My Company</p>
            </div>
            <div className='grid grid-cols-2 gap-10 mt-7'>
                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/">About Us</a></li>
                        <li><a href="/">Contact Us</a></li>
                        <li><a href="/">Terms of Service</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <ul>
                        <li><a href="/" className="social-link">instagram</a></li>
                        <li><a href="/" className="social-link">instagram</a></li>
                        <li><a href="/" className="social-link">instagram</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
