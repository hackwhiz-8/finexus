import React, { useEffect, useState } from 'react'
import image from '../../assests/images/IMG_20240720_171146.png'
import { loanTypes } from '../../data/BanksLinks'
import { contactDetails } from '../../data/BanksLinks'

import * as Icon1 from "react-icons/bi"
import * as Icon3 from "react-icons/hi2"
import * as Icon2 from "react-icons/io5"
import ContactForm from './ContactForm'
// import mailSender from '../../utils/MailSender'
// import { contactUsEmail } from '../../utils/MailTemplate'
// import { Form } from 'react-router-dom'




const Contact = () => {
    const [name, setname] = useState('')
    const [lastName, setlastName] = useState('')
    const [mobile, setMObile] = useState(0)
    const [email, setemail] = useState('')
    const [city, setCity] = useState('')
    const [LoanAmount, setAmount] = useState(0)
    const [income, setincome] = useState(0)
    const [loanType, setLoanType] = useState('')
    const [isSuccess, setIsSuccess] = useState(false)

    const resetForm = () => {
        setname('');
        setlastName('');
        setemail('');
        setMObile(0);
        setAmount(0);
        setLoanType('');
        setincome(0);

    }

    const handleSubmit =  (e) => {
        // Sort results by id in descending order, take two
        // and return the age as an integer.

        
         fetch('https://sheetdb.io/api/v1/xppj1l451nj3t', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                data: [
                    {

                        Name: name,
                        lastname: lastName,
                        email: email,
                        Mobile: mobile,
                        LoanAmount: LoanAmount,
                        LoanType: loanType,
                        city: city,
                        income: income
                    }
                ]
            })
        })
            .then((response) => response.json())
            .then((data) => {
                alert("Lead Generated successfully")
                console.log(data)
            })
         setIsSuccess(true);
    }

    useEffect(() => {
        if (isSuccess) {
          resetForm();
          setIsSuccess(false)
        }
      }, [ isSuccess])


    return (
        <div className='w-full h-[630px]  '>
            <div className='grid grid-cols-2'>
                <div className=' mx-auto mt-10'>
                    <div className='flex items-center'>
                        <img src={image} alt="" width={"80px"} className='mb-5' />
                        <p className='text-2xl p-5'>Finexus India</p>
                    </div>
                    {contactDetails.map((ele, i) => {
                        let Icon = Icon1[ele.icon] || Icon2[ele.icon] || Icon3[ele.icon]
                        return (
                            <div
                                className="flex flex-col gap-[2px] p-3 text-sm text-richblack-200"
                                key={i}
                            >
                                <div className="flex flex-row items-center gap-3 ">
                                    <Icon size={25} />
                                    <h1 className="text-lg font-semibold text-richblack-5">
                                        {ele?.heading}
                                    </h1>
                                </div>
                                <p className="font-medium">{ele?.description}</p>
                                <p className="font-semibold">{ele?.details}</p>
                            </div>
                        )
                    })}

                </div>
                <div className='bg-gray-950 border-2 mt-5 flex flex-col border-gray-800 lg:w-[500px] backdrop-blur-2xl rounded-md bg-opacity-50 '>
                    <div className='text-center text-2xl  mt-5'> Get Best Offers</div>
                    <ContactForm/>
                    {/* <form method="post" action="" name="product" id="product" className='flex flex-col gap-2 mt-2 p-5' >
                        <div className="flex flex-col gap-5 lg:flex-row">
                            <div className="flex flex-col gap-2 lg:w-[48%]">
                                <label htmlFor="firstname" className="lable-style">
                                    First Name
                                </label>
                                <input

                                    type="text"
                                    name="firstname"
                                    id="firstname"
                                    placeholder="Enter first name"
                                    className=" bg-transparent bg-opacity-50 backdrop-blur-lg p-2 border-2 rounded-md border-gray-800"
                                    onChange={(e) => setname(e.target.value)}
                                    required
                                />

                            </div>
                            <div className="flex flex-col gap-2 lg:w-[48%]">
                                <label htmlFor="lastname" className="lable-style">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    name="lastname"
                                    id="lastname"
                                    placeholder="Enter last name"
                                    className="bg-transparent bg-opacity-50 backdrop-blur-lg p-2 border-2 rounded-md border-gray-800"
                                    onChange={(e) => setlastName(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-5 lg:flex-row">
                            <div className="flex flex-col gap-2 lg:w-[48%]">
                                <label htmlFor="mobileno" className="lable-style">
                                    Mobile no
                                </label>
                                <input
                                    type="number"
                                    name="Mobile"
                                    id="mobileno"
                                    placeholder="999-999-9999"
                                    className=" bg-transparent bg-opacity-50 backdrop-blur-lg p-2 border-2 rounded-md border-gray-800"
                                    onChange={(e) => setMObile(e.target.value)}
                                    required
                                />

                            </div>
                            <div className="flex flex-col gap-2 lg:w-[48%]">
                                <label htmlFor="city" className="lable-style">
                                    City
                                </label>
                                <input
                                    type="text"
                                    name="city"
                                    id="ciity"
                                    placeholder="Enter your City"
                                    className="bg-transparent bg-opacity-50 backdrop-blur-lg p-2 border-2 rounded-md border-gray-800"
                                    onChange={(e) => setCity(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 lg:w-[48%]">
                            <label htmlFor="Email" className="lable-style">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="Email"
                                placeholder="Enter last name"
                                className="bg-transparent bg-opacity-50 backdrop-blur-lg p-2 border-2 rounded-md border-gray-800"
                                onChange={(e) => setemail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-5 lg:flex-row">
                            <div className="flex flex-col gap-2 lg:w-[48%]">
                                <label htmlFor="amount" className="lable-style">
                                    Loan Amount Required:
                                </label>
                                <input
                                    type="number"
                                    name="LoanAmount"
                                    id="amount"
                                    placeholder="100000"
                                    className="bg-transparent bg-opacity-50 backdrop-blur-lg p-2 border-2 rounded-md border-gray-800"
                                    onChange={(e) => setAmount(e.target.value)}
                                    required
                                />

                            </div>
                            <div className="flex flex-col gap-2 lg:w-[48%]">
                                <label htmlFor="income" className="">
                                    Monthly Income
                                </label>
                                <input
                                    type="number"
                                    name="income"
                                    id="income"
                                    placeholder="Enter your income"
                                    onChange={(e) => setincome(e.target.value)}
                                    className=" bg-transparent bg-opacity-50 backdrop-blur-lg p-2 border-2 rounded-md border-gray-800"
                                    required={true}
                                />
                            </div>
                        </div>


                        <div className='flex flex-col  gap-2 lg:w-[48%]'>
                            <label htmlFor="Loan Type">Loan Type</label>
                            <select id="city-select" name='LoanType' required onChange={(e) => setLoanType(e.target.value)} className='text-gray-400 p-[2px] bg-transparent bg-opacity-50 backdrop-blur-lg  border-2 rounded-md border-gray-800'>
                                {
                                    loanTypes.map((ele, i) => {
                                        return (
                                            <option value={ele.type} key={i}>{ele.type}</option>
                                        )
                                    })
                                }

                            </select>
                        </div>
                    </form>
                    <button type='submit' className='bg-lime-400 text-black text-lg p-2 rounded-md mt-2' onClick={handleSubmit}>Submit</button> */}
                </div>
            </div>



        </div>
    )
}

export default Contact
