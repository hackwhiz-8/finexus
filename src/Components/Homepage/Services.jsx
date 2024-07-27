import React from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
  return (

    <div className='mt-20  '>
      <h1 className='text-[30px]  mx-16 '> Trending Loans & Offers</h1>
      <p className='mx-16 p-2 text-gray-400 mb-10'>We are a one-stop-shop for all your loan credit requirements. We aim to revolutionise how loans are
         distributed by infusing technology and digital platforms into the financial sector. With a network of
          over 50 lenders, Urban Money offers you the best financial products and services. 
        We match your credit profile with the finance provider's criteria to process your loan application.</p>
      <div className=' grid lg:grid-cols-4 gap-2  mx-auto lg:w-11/12 justify-center items-center  rounded-[20px] mt-5 '>
        <ServiceCard head={'Personal Loan'} desc={''} />
        <ServiceCard head={'Home Loan'} desc={''} />
        <ServiceCard head={'Bussiness Loan'} desc={''} />
        <ServiceCard head={'Loan against Property'} desc={''} />
      </div>
    </div>

  )
}

export default Services
