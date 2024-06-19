import React from 'react';
import CarList from '../Car/CarList';
import './App.css';
import largeImage from '../../assets/image0.png';

const carsData = [
    {
        name: 'BMW 320d xDrive',
        power: '140 кВт (190 к.с.), 5.1 л/100 км',
        consumption: '5.1 л/100 км',
        emissions: 'CO2 133 г/км',
        price: '1 937 752',
        imageSrc: require('../../assets/image1.png')
    },
    {
        name: 'BMW 318d',
        power: '110 кВт (150 к.с.), 4.8 л/100 км',
        consumption: '4.8 л/100 км',
        emissions: 'CO2 125 г/км',
        price: '1 605 780',
        imageSrc: require('../../assets/image2.png')
    },
    {
        name: 'BMW 320i xDrive',
        power: '135 кВт (184 к.с.), 6.8 л/100 км',
        consumption: '6.8 л/100 км',
        emissions: 'CO2 155 г/км',
        price: '2 837 023',
        imageSrc: require('../../assets/image3.png')
    }
];

const App: React.FC = () => {
    return (
        <div className="app">
            <h1 style={{ fontWeight: 300 }}>Виберіть свій автомобіль</h1>
            <p className="subtitle">
                50 000 гривень з продажу кожної автівки 2022 року виробництва ми перераховуємо на фандрейзингову платформу 
                <br /> UNITED24.*</p>
 
            <div className="filters">
                <div className="filter">Серія <span className="arrow"></span></div>
                <div className="filter">Тип кузова <span className="arrow"></span></div>
                <div className="filter">Регулярна ціна <span className="arrow"></span></div>
                <button className="find-button">Знайти</button>
            </div>
            <div className="header-image-container">
                <img src={largeImage} alt="Large BMW Image" className="large-image" />
                <div className="bestsellers">БЕСТСЕЛЕРИ.</div>
            </div>
            <div className="cars-wrapper">
                <div className="car-container">
                    <CarList cars={carsData} />
                </div>
            </div>
        </div>
    );
};

export default App;