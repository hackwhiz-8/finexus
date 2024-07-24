import React from 'react'
import  {BanksLink} from '../../data/BanksLinks'

const OutPartners = () => {
  return (
    <div className='mt-20'>
         <h1 className='text-[30px]  mx-16'>Our Partners</h1>
         <div className='grid grid-cols-6 mx-auto lg:w-11/12 justify-center items-center border-l-2 border-t-2 mb-2 mt-5  '>
            {BanksLink.map((data,index)=>{
                return(
                    <div className='flex justify-center p-2 border-r-2 border-b-2 border-gray-300 text-gray-400'>{data.title}</div>
                )
            })}

         </div>
    </div>
  )
}

export default OutPartners
