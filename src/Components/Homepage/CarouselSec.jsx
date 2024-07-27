import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import CarouselCard from './CarouselCard';
import image from '../../assests/images/dazzle-online-banking.gif'
import image1 from '../../assests/images//BussinessLoan.gif'
import image2 from '../../assests/images/home.png'
import image3 from '../../assests/images/teach.gif'
import image4 from '../../assests/images/dazzle-signing-a-financial-contract.gif'

const CarouselSec = () => {
    return (
        <Carousel autoPlay={true} infiniteLoop={true} swipeable={true} showThumbs={false} showArrows={false} className='mb-10' >
            <CarouselCard heading={'Personal Loan Loaded with benifit! '} desc={''}  image={image}/>
            <CarouselCard heading={'Home with Simpler Faster Friendlier Home Loans '} desc={''} image={image2}/>
            <CarouselCard heading={' Score & Report worth ₹500  Absolutely FREE'} desc={''}  image={image3}/>
            <CarouselCard heading={'Bussiness Loan '} desc={'hello'}  HighLight={"Bussiness Loan"} image={image1}/>
            <CarouselCard heading={'Loan against Property '} desc={'hello'} image={image4}/>
        </Carousel>
    )
}

export default CarouselSec
//  <a href="https://icons8.com/illustrations/author/JTmm71Rqvb2T">Dani Grapevine</a> from <a href="https://icons8.com/illustrations">Ouch!</a>
