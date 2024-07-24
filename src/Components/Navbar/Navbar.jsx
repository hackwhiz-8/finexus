import React from 'react'
import image from '../../assests/images/IMG_20240720_171146.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div>
            <div className='flex flex-row justify-between bg-black  text-white p-2 mx-auto mb-2 pt-5 '>
                <div className='flex items-center mx-5'>
                    <img src={image} alt="" width={"40px"} />
                    <p className='mx-2 font-bebas-neue font-bold text-purple-medium text-[20px]'>Finexus India</p>
                </div>
                {/* <img src="" alt="" /> */}
                {/* links */}
                <div className='mx-[100px] flex items-center'>
                    <ul className='flex gap-5  font-bebas-neue items-center'>
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
