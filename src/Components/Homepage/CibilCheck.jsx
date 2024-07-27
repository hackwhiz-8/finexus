import React from 'react'
import cibil from '../../assests/images/businessman-pushing-credit-score-speedometer-from-poor-good-tiny-person-improving-personal-credit-history-with-efforts-flat-vector-illustration-business-reputation-customer-lo.png'

const CibilCheck = () => {
    return (
        <div className='grid lg:grid-cols-3 bg-zinc-800  mx-auto  justify-center  items-center  rounded-[20px]  hover:bg-zinc-900 transition-all ease-in-out'>
            <img className='mx-auto lg:w-[300px] w-[200px]' src={cibil} alt="" />
            <p className='text-gray-400 '>Get your CIBIL Credit Report worth ₹500 for FREE
                5 Lac+ people have got their Credit Scores for FREE!</p>
            <button className='bg-blue-500 text-black mx-auto p-4 rounded-md hover:bg-blue-600'>Check Your Cibil Score Now</button>
        </div>
    )
}

export default CibilCheck
