import React, { useState } from 'react'



const Sip = () => {

    const [InvestedAmount, setINvestedAmount] = useState(0)
    const [tenure, settenure] = useState(0)
    const [Rate, setRate] = useState(0)

    return (
        <div>
            <form action="">
                <div>
                    <label htmlFor="">helo</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor=""></label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor=""></label>
                    <input type="text" />
                </div>
            </form>
        </div>
    )
}

export default Sip
