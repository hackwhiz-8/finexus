import React from 'react'
import image from '../../assests/images/blogging-concept-illustration.png'
import { Link } from 'react-router-dom'

const CarouselCard = () => {
    return (
        <div className='grid grid-cols-2 w-full mx-auto  justify-center  p-5 rounded-md items-center bg-gray-950'>
            <div className=' lg:h-[500px] flex flex-col items-start mx-auto p-10 justify-center'>
                <h1 className='text-[50px] text-gray-200'>Finexus India</h1>
                <p className='text-left text-gray-400'>We are a one-stop-shop for all your loan credit requirements. We aim to revolutionise how loans are distributed by infusing technology and digital platforms into the financial sector. With a network of over 50 lenders, Urban Money offers you the best financial products and services. We match your credit profile with the finance provider's criteria to process your loan application.</p>
                <Link to='/contact' ><button className='p-2 bg-lime-500 rounded-md text-black text-[18px] mt-10 transition-all ease-in-out hover:bg-lime-700'>Contact Us</button></Link>
            </div>
            <div className=' lg:h-[500px] '><img src={image} alt="" /></div>
        </div>
    )
}

export default CarouselCard
