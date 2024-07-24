import CountryCode from "../../data/countrycode.json"
import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { loanTypes } from '../../data/BanksLinks'

const ContactForm = () => {
    const [loading, setLoading] = useState(false)
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful },
    } = useForm()

    const submitContactForm = async (data) => {
        // console.log("Form Data - ", data)
        fetch('https://sheetdb.io/api/v1/xppj1l451nj3t', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ data })
        })
            .then((response) => response.json())
            .then((data) => {
                alert("Lead Generated successfully")
                console.log(data)
            })
    }

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset({
                email: "",
                Name: "",
                lastname: "",
                message: "",
                phoneNo: "",
                loanAmount: "",
                city: ""
            })
        }
    }, [reset, isSubmitSuccessful])
    return (
        <div>
            <form
                className="flex flex-col gap-2 p-5"
                onSubmit={handleSubmit(submitContactForm)}
            >
                <div className="flex flex-col gap-5 lg:flex-row">
                    <div className="flex flex-col gap-2 lg:w-[48%]">
                        <label htmlFor="firstname" className="lable-style">
                            First Name
                        </label>
                        <input
                            type="text"
                            name="Name"
                            id="Name"
                            placeholder="Enter first name"
                            className="form-style bg-transparent bg-opacity-50 backdrop-blur-lg p-2 border-2 rounded-md border-gray-800"
                            {...register("Name", { required: true })}
                        />
                        {errors.firstname && (
                            <span className="-mt-1 text-[12px] text-yellow-100">
                                Please enter your name.
                            </span>
                        )}
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
                            className="form-style bg-transparent bg-opacity-50 backdrop-blur-lg p-2 border-2 rounded-md border-gray-800"
                            {...register("lastname")}
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="lable-style">
                        Email Address
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter email address"
                        className="form-style bg-transparent bg-opacity-50 backdrop-blur-lg p-2 border-2 rounded-md border-gray-800"
                        {...register("email", { required: true })}
                    />
                    {errors.email && (
                        <span className="-mt-1 text-[12px] text-yellow-100">
                            Please enter your Email address.
                        </span>
                    )}
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="phonenumber" className="lable-style">
                        Phone Number
                    </label>

                    <div className="flex gap-5">
                        <div className="flex w-[81px] flex-col gap-2">
                            <select
                                type="text"
                                name="phonenumberCode"
                                id="phonenumberCode"
                                placeholder="Enter first name"
                                className="form-style bg-transparent bg-opacity-50 backdrop-blur-lg p-2 border-2 rounded-md border-gray-800"
                                {...register("countrycode", { required: true })}
                            >
                                {CountryCode.map((ele, i) => {
                                    return (
                                        <option key={i} value={ele.code} className="bg-black">
                                            {ele.code} -{ele.country}
                                        </option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="flex w-[calc(100%-90px)] flex-col gap-2">
                            <input
                                type="number"
                                name="phonenumber"
                                id="phonenumber"
                                placeholder="12345 67890"
                                className="form-style bg-transparent bg-opacity-50 backdrop-blur-lg p-2 border-2 rounded-md border-gray-800"
                                {...register("phonenumber", {
                                    required: {
                                        value: true,
                                        message: "Please enter your Phone Number.",
                                    },
                                    maxLength: { value: 10, message: "Invalid Phone Number" },
                                    minLength: { value: 10, message: "Invalid Phone Number" },
                                })}
                            />
                        </div>
                    </div>
                    {errors.phoneNo && (
                        <span className="-mt-1 text-[12px] text-yellow-100">
                            {errors.phoneNo.message}
                        </span>
                    )}
                </div>
                <div className="flex flex-col gap-5 lg:flex-row">
                    <div className="flex flex-col gap-2 lg:w-[48%]">
                        <label htmlFor="firstname" className="lable-style">
                            Loan Amount required
                        </label>
                        <input
                            type="number"
                            name="LoanAmount"
                            id="LoanAmount"
                            placeholder="Enter Loan Amount required"
                            className="form-style bg-transparent bg-opacity-50 backdrop-blur-lg p-2 border-2 rounded-md border-gray-800"
                            {...register("LoanAmount", { required: true })}
                        />
                        {errors.firstname && (
                            <span className="-mt-1 text-[12px] text-yellow-100">
                                Please enter Loan Amount.
                            </span>
                        )}
                    </div>
                    <div className="flex flex-col gap-2 lg:w-[48%]">
                        <label htmlFor="lastname" className="lable-style">
                            City
                        </label>
                        <input
                            type="text"
                            name="city"
                            id="city"
                            placeholder="Enter city"
                            className="form-style bg-transparent bg-opacity-50 backdrop-blur-lg p-2 border-2 rounded-md border-gray-800"
                            {...register("city")}
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-2 lg:w-[48%] mb-2">
                    <label htmlFor="firstname" className="lable-style">
                        Loan Amount required
                    </label>
                    <select
                                type="text"
                                name="phonenumberCode"
                                id="phonenumberCode"
                                placeholder="Enter first name"
                                className="form-style bg-transparent bg-opacity-50 backdrop-blur-lg p-2 border-2 rounded-md border-gray-800"
                                {...register("LoanType", { required: true })}
                            >
                                {loanTypes.map((ele, i) => {
                                    return (
                                        <option key={i} value={ele.code} className="bg-black">
                                            {ele.type}
                                        </option>
                                    )
                                })}
                            </select>
                    {errors.firstname && (
                        <span className="-mt-1 text-[12px] text-yellow-100">
                            Please enter Loan Amount.
                        </span>
                    )}
                </div>

                <button
                    disabled={loading}
                    type="submit"
                    className={`rounded-md bg-blue-400 px-6 py-3 text-center text-[13px] font-bold text-black shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] 
                         ${!loading &&
                        "transition-all duration-200 hover:scale-95 hover:shadow-none"
                        }  disabled:bg-richblack-500 sm:text-[16px] `}
                >
                    Send Message
                </button>
            </form>
        </div>
    )
}

export default ContactForm
