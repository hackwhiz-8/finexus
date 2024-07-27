import React, { useState } from 'react'
import image from '../../assests/images/IMG_20240720_171146.png'
import { Link } from 'react-router-dom'
import { IoReorderThree } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import './DropCss.css'

const Navbar = () => {
    const [openDropdown, setOpenDropdown] = useState(false);

    const toggleDropdown = () => {
        setOpenDropdown(!openDropdown);
    };
    return (
        <div>
            <div className='flex flex-row justify-between bg-black  text-white p-2 mx-auto mb-2 pt-5 '>
                <div className='flex items-center sm:w-[300px] mx-5'>
                    <img src={image} alt="" className='lg:w-[40px] w-[30px]' />
                    <p className='mx-2 font-bebas-neue font-bold text-purple-medium lg:text-[20px] text-[15px] '>Finexus India</p>
                </div>
                {/* <img src="" alt="" /> */}
                {/* links */}
                <div className='mx-[100px] flex lg:items-center'>
                    <div className="relative lg:opacity-0 ml-[100px]">
                        <NavLink
                            to="#"
                            onClick={toggleDropdown}
                            className="text-gray-200 hover:text-white"
                        >
                            <IoReorderThree /> 
                        </NavLink>
                        {openDropdown && (
                            <ul className="absolute bg-gray-800 py-2 w-48 rounded shadow-md z-50">
                                <li className="py-2 px-4">
                                    <NavLink to="/" className="text-gray-200 hover:text-white">
                                        Home
                                    </NavLink>
                                </li>
                                <li className="py-2 px-4">
                                    <NavLink to="/contact" className="text-gray-200 hover:text-white">
                                        Calculators
                                    </NavLink>
                                </li>
                                <li className="py-2 px-4">
                                    <NavLink to="/contact" className="text-gray-200 hover:text-white">
                                        Contact Us
                                    </NavLink>
                                </li>
                            </ul>
                        )}
                    </div>
                    <ul className='flex gap-5  font-bebas-neue items-center opacity-0  lg:opacity-100'>
                        <Link to='/'><li className='hover:text-gray-300 cursor-pointer transition-all ease-in-out' >Home</li></Link>
                        <Link to='/contact'><li className='hover:text-gray-300 cursor-pointer transition-all ease-in-out' >Calculators</li></Link>
                        <Link><li className='hover:text-gray-300 cursor-pointer transition-all ease-in-out' >Services</li></Link>
                        <Link to='/contact'><li className='hover:text-gray-300 cursor-pointer transition-all ease-in-out' >Contact Us</li></Link>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
