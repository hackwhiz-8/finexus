import React from 'react'
import image from '../../assests/images/IMG_20240720_171146.png'
const Navbar = () => {
    return (
        <div>
            <div className='flex flex-row justify-between  p-5 mx-auto mb-2'>
                <div className='flex items-center'>
                    <img src={image} alt="" width={"40px"} />
                    <p className='mx-2 font-bebas-neue font-bold text-purple-medium text-[20px]'>Finexus India</p>
                </div>
                {/* <img src="" alt="" /> */}
                {/* links */}
                <div className='mx-[100px]'>
                    <ul className='flex gap-5 hover:text-purple-richPlum font-bebas-neue '>
                        <li >Home</li>
                        <li >Projects</li>
                        <li >Services</li>
                        <li >ContactMe</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
