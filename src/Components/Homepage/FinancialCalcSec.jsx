import React from 'react'
import FinancialCard from './FinancialCard'

const FinancialCalc = () => {
  return (
    <div className='mt-20  '>
      <h1 className='text-[30px] font-bold mx-16 '> Financial Calculators</h1>
      <div className=' grid grid-cols-3 gap-2  mx-auto lg:w-11/12 justify-center items-center bg-green-500 rounded-[20px] mt-5 p-2'>
        <FinancialCard />
        <FinancialCard />
        <FinancialCard />
        <FinancialCard />
        <FinancialCard />
        <FinancialCard />
      </div>
    </div>
  )
}

export default FinancialCalc
