import React from 'react'
import FinancialCard from './FinancialCard'
import image from '../../assests/images/financial-planning-concept-illustration.png'

const FinancialCalc = () => {
  return (
    <div className='mt-20  '>
      <h1 className='text-[30px]  mx-16 '> Financial Calculators</h1>
      <p className=' text-gray-400 mx-16 p-2 mb-10'>At Finexus India, we aim to ease the burden of credit procedures through the help of financial calculators.
        You get access to various financial calculators, from EMI calculators to balance transfer
        calculators to FD calculators. With easy access to these calculators,
        you can now compute your monthly payments in advance and unlock better management and timely repayments.</p>
      <div className=' grid lg:grid-cols-3 gap-2   mx-auto w-11/12 justify-center items-center  rounded-[20px] mt-5 p-2'>
        <FinancialCard text={'SIP calculator'} desc={'SIP calculator is a tool that enables you to compute '} image={image} path={'/calculators/SIP'} />
        <FinancialCard text={'EMI calculator'} desc={'A Home Loan EMI Calculator permits you to compute  '} image={image} path={'/calculators/EMI'} />
        <FinancialCard text={'Balance Transfer'} desc={'Put forward your decision on the balance transfer '} image={image} path={'/calculators/Balance-transfer'} />
        <FinancialCard text={'Pre-Payment'} desc={'A Home Loan Prepayment calculator is an online '} image={image} path={'/calculators/Pre-payment'} />
        <FinancialCard text={'Gratuity Calculator'} desc={'A gratuity calculator is an advanced tool that estimates  '} image={image} path={'/calculators/grauity'}/>
        <FinancialCard text={'Elegibility Calculator'} desc={'Determine your housing loan eligibility through Home Loan '} image={image} path={'/calculators/normal'}/>

      </div>
    </div>
  )
}

export default FinancialCalc
