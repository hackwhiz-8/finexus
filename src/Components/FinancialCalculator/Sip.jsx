import React, { useState } from 'react';

const SipCalculator = () => {
    const [investmentAmount, setInvestmentAmount] = useState(0);
    const [frequency, setFrequency] = useState('Monthly');
    const [tenure, setTenure] = useState(1);
    const [interestRate, setInterestRate] = useState(10);
    const [result, setResult] = useState({});

    const calculateSip = () => {
        const principal = investmentAmount * tenure * 12;
        const rate = interestRate / 100 / 12;
        const n = tenure * 12;
        const totalAmount = principal * (Math.pow((1 + rate), n) - 1) / rate;
        const maturityAmount = totalAmount + principal;

        setResult({
            totalAmount: totalAmount.toFixed(2),
            maturityAmount: maturityAmount.toFixed(2),
        });
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case 'investmentAmount':
                setInvestmentAmount(parseFloat(value));
                break;
            case 'frequency':
                setFrequency(value);
                break;
            case 'tenure':
                setTenure(parseFloat(value));
                break;
            case 'interestRate':
                setInterestRate(parseFloat(value));
                break;
            default:
                break;
        }
    };

    return (
        <div className='w-full flex flex-col justify-center items-center  h-[650px] gap-10 '>
            <h2 className='text-[30px]'>SIP Calculator</h2>
            <form className='border-2 border-gray-800 flex flex-col p-10'>
                <label>
                    Investment Amount:
                </label>
                <input
                    type="number"
                    name="investmentAmount"
                    value={investmentAmount}
                    onChange={handleInputChange}
                    className='bg-transparent bg-opacity-50 backdrop-blur-lg p-2 border-2 rounded-md border-gray-800'
                />
                <br />
                <div className='flex gap-2 items-center'>
                    <label>
                        Frequency:
                    </label>
                    <select name="frequency" value={frequency} onChange={handleInputChange} className='bg-transparent bg-opacity-50 backdrop-blur-lg p-2 border-2 rounded-md border-gray-800'>
                        <option value="Monthly" className='bg-black'>Monthly</option>
                        <option value="Quarterly" className='bg-black'>Quarterly</option>
                        <option value="Half-Yearly" className='bg-black'>Half-Yearly</option>
                        <option value="Yearly" className='bg-black'>Yearly</option>
                    </select>
                    <br />
                    <label>
                        Tenure (in years):
                    </label>
                    <input
                        type="number"
                        name="tenure"
                        value={tenure}
                        onChange={handleInputChange}
                        className='bg-transparent bg-opacity-50 backdrop-blur-lg p-2 border-2 rounded-md border-gray-800'
                    />
                </div>
                <br />
                <label>
                    Interest Rate (%):
                </label>
                <input
                    type="number"
                    name="interestRate"
                    value={interestRate}
                    onChange={handleInputChange}
                    className='bg-transparent bg-opacity-50 backdrop-blur-lg p-2 border-2 rounded-md border-gray-800'
                />
                <br />
                <button type="button" onClick={calculateSip} className='bg-blue-400 p-2 text-black text-[20px]  rounded-md'>
                    Calculate
                </button>
            </form>
                <h3>Results:</h3>
            <div className='flex gap-5'>
                <p>
                    Total Amount: ₹{result.totalAmount || 0}
                </p>
                <p>
                    Maturity Amount: ₹{result.maturityAmount || 0}
                </p>
            </div>
        </div>
    );
};

export default SipCalculator;