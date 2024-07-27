import React from 'react'
import { Link } from 'react-router-dom'

const FinancialCard = (props) => {
    return (
        <div className='relative  lg:w-[430px] w-[330px] mb-2 p-2  rounded-md bg-zinc-800 hover:bg-zinc-900 transition-all ease-in-out' >
            <h1 className='text-xl p-2 mt-2'>{props.text}</h1>
            <div className='border-2 border-blue-400 mr-20'></div>
            <p className='p-2 w-[200px] text-gray-400'>{props.desc}</p>
            
            <Link to={props.path}><button className='bg-blue-500 mt-16 rounded-sm p-2 m-2 text-[18px] text-gray-800 hover:bg-blue-600 '>calculate</button></Link>
            <img className='absolute left-[60%] top-[45%]' src={props.image} alt="" width={"100px"} />
        </div>
    )
}

export default FinancialCard
