import React from 'react';
import Slider from 'react-slick';
import Car, { CarProps } from './Car';
import './CarList.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface CarListProps {
    cars: CarProps[];
}

const CarList: React.FC<CarListProps> = ({ cars }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Slider {...settings} className="car-slider">
            {cars.map((car, index) => (
                <div key={index} className="car-slide">
                    <Car key={index} {...car} />
                </div>
            ))}
        </Slider>
    );
};

export default CarList;