import React from 'react'
import image from '../../assests/images/financial-planning-concept-illustration.png'
import { Link } from 'react-router-dom'

const ServiceCard = () => {
  return (
    <div className='relative  w-[330px]  rounded-md p-2 bg-gray-950' >
      <h1 className='text-xl p-2 mt-2'>Personal Loan</h1>
      <div className='border-2 border-blue-400 mr-20'></div>
      <p className='p-2 w-[200px] mb-10 text-gray-400 '> voluptatibus esse odit cum aliquid quo. Rerum consectetur molestiae nam!</p>
      <span className=' absolute p-2 rounded-r-md bg-red-500 left-[-0px] text-gray-400'>10.9%</span>
      <Link to='/contact'> <button className='bg-blue-500 text-black mt-16 rounded-sm  p-2 m-2 mb-5'>Check Eligibility</button></Link>
      <img className='absolute left-[60%] top-[45%]' src={image} alt="" width={"100px"} />
    </div>
  )
}

export default ServiceCard
