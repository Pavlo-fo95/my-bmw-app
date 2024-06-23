import React from 'react';
import './Car.css';

export interface CarProps {
    name: string;
    power: string;
    consumption: string;
    emissions: string;
    price: string;
    imageSrc: string;
}

const Car: React.FC<CarProps> = ({ name, power, consumption, emissions, price, imageSrc }) => {
    return (
        <div className="car">
            <div className="special-label">
                <span className="star">★</span> СПЕЦІАЛЬНА ПРОПОЗИЦІЯ
            </div>
            <img src={imageSrc} alt={name} />
            <div className="car-info">
                <h4>{name}</h4>
                <p>Мощность: {power}</p>
                <p>Расход: {consumption}</p>
                <p>Выбросы CO2: {emissions}</p>
                <div className="price-wrapper">
                    <h4>{price} грн <span style={{ opacity: '0.6' }}>ⓘ</span></h4>
                </div>
                <button className="details-button">Детальніше</button>
            </div>
        </div>
    );
};

export default Car;