import React from 'react'
import image from '../../assests/images/IMG_20240720_171146.png'
import { contactDetails } from '../../data/BanksLinks'

import * as Icon1 from "react-icons/bi"
import * as Icon3 from "react-icons/hi2"
import * as Icon2 from "react-icons/io5"
import ContactForm from './ContactForm'
// import mailSender from '../../utils/MailSender'
// import { contactUsEmail } from '../../utils/MailTemplate'
// import { Form } from 'react-router-dom'




const Contact = () => {

    return (
        <div className='w-full lg:h-[630px]  '>
            <div className='lg:grid grid-cols-2'>

                <div className='bg-gray-950 border-2 mt-5 flex flex-col lg:ml-[200px] ml-[40px] border-gray-800 lg:w-[500px] w-[300px] backdrop-blur-2xl rounded-md bg-opacity-50 '>
                    <div className='text-center text-2xl  mt-5'> Get Best Offers</div>
                    <ContactForm />

                </div>
                <div className=' mx-auto mt-10'>
                    <div className='flex items-center'>
                        <img src={image} alt="" width={"50px"} className='mb-5' />
                        <p className='text-2xl p-5'>Finexus India</p>
                    </div>
                    {contactDetails.map((ele, i) => {
                        let Icon = Icon1[ele.icon] || Icon2[ele.icon] || Icon3[ele.icon]
                        return (
                            <div
                                className="flex flex-col gap-[2px] p-3 lg:text-sm text-richblack-200"
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
            </div>



        </div>
    )
}

export default Contact
