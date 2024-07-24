import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import CarouselCard from './CarouselCard';

const CarouselSec = () => {
    return (
        <Carousel autoPlay={true} infiniteLoop={true} swipeable={true} showThumbs={false} showArrows={false} className='mb-10'>
            <CarouselCard/>
            <CarouselCard/>
            <CarouselCard/>
            <CarouselCard/>
            <CarouselCard/>
        </Carousel>
    )
}

export default CarouselSec
