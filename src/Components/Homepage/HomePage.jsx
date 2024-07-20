import React from 'react'
import CarouselSec from './CarouselSec'
import CibilCheck from './CibilCheck'
import Services from './Services'
import FinancialCalc from './FinancialCalcSec'
import OutPartners from './OutPartners'
import AboutUs from './AboutUs'
import Footer from '../Footer/Footer'

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
             <Footer/>
        </div>
    )
}

export default HomePage
