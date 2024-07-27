import React from 'react'
import { ImCheckmark2 } from "react-icons/im";
import { Link } from 'react-router-dom'



const CarouselCard = (props) => {
    return (
        <div className='flex lg:h-[500px] lg:flex-row flex-col w-full bg-blue-500 '>
           <div className='flex flex-col lg:w-[800px] gap-5 items-start justify-center p-10 ml-10'>
            <h1 className='text-start lg:text-[45px] text-[20px] text-black font-bold mb-2'>{props.heading}</h1>
           <ul>
            <li className='text-left flex items-center gap-2'><ImCheckmark2 />Attractive interest Rate</li>
            <li className='text-left flex items-center gap-2'><ImCheckmark2 /> 100% paper less</li>

           </ul>
            <Link to='/contact'><button className={`rounded-md bg-black px-6 py-3 mt-5 border-2 border-gray-800 text-center text-[13px] font-bold  shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] 
                         disabled:bg-richblack-500 sm:text-[16px] hover:scale-95`}> Apply Now</button></Link>
           </div>
          <div className='lg:w-[500px]  p-2 mx-auto '> <img src={props.image}  alt="" width={"100px"} /></div>
        </div>
    )
}

export default CarouselCard
// <div className='grid lg:grid-cols-2  w-full mx-auto  justify-center  p-5 rounded-md items-center bg-blue-600  transition-all ease-in-out'>
        //     <div className=' lg:h-[500px] flex flex-col items-start mx-auto p-10 justify-center'>
        //         <h1 className='lg:text-[40px] text-[20px] text-gray-400 text-center lg:text-left '>{props.heading}  </h1>
        //          <p className='text-left'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus reprehenderit quo ut nam sunt nisi explicabo magnam illum at doloremque.</p>
                
        //         <Link to='/contact' ><button className='p-2 bg-black rounded-md  text-[18px] mt-10 transition-all ease-in-out hover:bg-blue-600'>Contact Us</button></Link>
        //     </div>
        //     <img src={props.image} alt="" width={'100px'}/>
        // </div>