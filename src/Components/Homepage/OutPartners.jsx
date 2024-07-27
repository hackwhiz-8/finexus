import React from 'react'
import {loanProviders} from '../../data/Banks'

const OutPartners = () => {
  return (
    <div className='mt-20'>
         <h1 className='text-[30px]  mx-16'>Our Partners</h1>
         <div className='grid lg:grid-cols-6 grid-cols-4 mx-auto lg:w-11/12 w-[330px] justify-center items-center border-l-2 border-gray-800 border-t-2 mb-2 mt-5  '>
            {loanProviders.map((data,index)=>{
                return(
                    <div className='flex justify-center p-3 transition-all ease-in-out border-r-2 border-b-2 border-gray-800  text-gray-400 hover:bg-blue-400 hover:text-black'>{data.type}</div>
                )
            })}

         </div>
    </div>
  )
}

export default OutPartners
