import React from 'react'
import CarouselSec from './CarouselSec'
import CibilCheck from './CibilCheck'
import Services from './Services'
import FinancialCalc from './FinancialCalcSec'
import OutPartners from './OutPartners'
import AboutUs from './AboutUs'

const HomePage = () => {
    return (
        <div>
             <CarouselSec/>
             {/* <FrontPage/> */}
             <CibilCheck/>
             <Services/>
             <FinancialCalc/>
             <OutPartners/>
             <AboutUs/>
             
        </div>
    )
}

export default HomePage
