import React from 'react'
import './FooterC.css';
import image from '../../assests/images/IMG_20240720_171146.png'

const Footer = () => {
    return (
        <footer className="footer bg-black grid grid-cols-3" >

            <div className="footer-section flex flex-col items-center">
                <img src={image} alt="Logo" className="w-[100px]"  />
                <p className='text-left'>&copy; 2024 My Company</p>
            </div>
            <div className='grid grid-cols-2 gap-20 mt-7'>
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
