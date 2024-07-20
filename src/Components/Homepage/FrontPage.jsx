import React from 'react'
import image from '../../assests/images/blogging-concept-illustration.png'

const FrontPage = () => {
    return (
        <div className='grid grid-cols-2  mx-auto w-11/12 justify-center items-center'>
            <div className='bg-red-300 lg:h-[700px] flex flex-col items-start justify-center'>
                <h1 className='text-[40px]'>Finexus India</h1>
                <p className='mt-2 pr-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Sapiente tenetur similique porro veritatis cumque eius! Quis repellendus similique id explicabo?</p>
                    <button className='p-2 bg-green-500 rounded-md  mt-10'>Contact Us</button>
            </div>
            <div className='bg-red-400 lg:h-[700px] '><img src={image} alt="" /></div>
        </div>
    )
}

export default FrontPage
