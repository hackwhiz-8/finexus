import React from 'react'
import image from '../../assests/images/financial-planning-concept-illustration.png'
const FinancialCard = () => {
    return (
        <div className='relative border-2 border-gray-700 rounded-md bg-white' >
            <h1 className='text-xl p-2 mt-2'>SIP Calculator</h1>
            <div className='border-2 border-blue-400 mr-20'></div>
            <p className='p-2 w-[200px]'>SIP calculator is a tool that enables you to compute </p>
            
            <button className='bg-blue-400 mt-16 rounded-sm p-2 m-2'>Check Eligibility</button>
            <img className='absolute left-[60%] top-[45%]' src={image} alt="" width={"100px"} />
        </div>
    )
}

export default FinancialCard
