import React from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
  return (

    <div className='mt-20  '>
      <h1 className='text-[30px] font-bold mx-16 '> Services</h1>
      <div className=' grid grid-cols-4 gap-2  mx-auto lg:w-11/12 justify-center items-center bg-green-500 rounded-[20px] mt-5 '>
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </div>

  )
}

export default Services
