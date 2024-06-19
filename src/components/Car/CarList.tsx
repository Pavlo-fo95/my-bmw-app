import React from 'react';
import Car, { CarProps } from './Car';
import './Car.css';
import './CarList.css';

interface CarListProps {
    cars: CarProps[];
}

const CarList: React.FC<CarListProps> = ({ cars }) => {
    return (
        <div className="car-list">
            {cars.map((car, index) => (
                <Car key={index} {...car} />
            ))}
        </div>
    );
};

export default CarList;