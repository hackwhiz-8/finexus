import React from 'react'

const FinancialCard = (props) => {
    return (
        <div className='relative  lg:w-[430px] mb-2 p-2  rounded-md bg-gray-950' >
            <h1 className='text-xl p-2 mt-2'>{props.text}</h1>
            <div className='border-2 border-blue-400 mr-20'></div>
            <p className='p-2 w-[200px] text-gray-400'>{props.desc}</p>
            
            <button className='bg-blue-500 mt-16 rounded-sm p-2 m-2 text-[18px] text-black'>calculate</button>
            <img className='absolute left-[60%] top-[45%]' src={props.image} alt="" width={"100px"} />
        </div>
    )
}

export default FinancialCard
