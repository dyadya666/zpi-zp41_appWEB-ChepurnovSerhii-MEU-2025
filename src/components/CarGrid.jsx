import React from 'react';
import CarCard from './CarCard';
import styles from '../styles/CarRental.module.css';
import sanFr from '../assets/images/san-francisco.jpg'
import green from '../assets/images/green.jpeg'
import holms from '../assets/images/holms.jpeg'
import fantomas from '../assets/images/subaru.jpg'
import micro from '../assets/images/blue.jpeg'
import pin from '../assets/images/pin.jpeg'

function CarGrid() {
  const cars = [
    { id: 1, image: sanFr, name: 'San-Francisco', price: '100'},
    { id: 2, image: green, name: 'Bathyscaphe', price: '120'},
    { id: 3, image: holms, name: 'Holms', price: '150'},
    { id: 4, image: fantomas, name: 'Fantomas', price: '90'},
    { id: 5, image: micro, name: 'Micro', price: '110'},
    { id: 6, image: pin, name: 'Killer', price: '130'}
  ];

  return (
    <div className={styles.carGridContainer}>
      <div className={styles.carGrid}>
        {cars.map(car => (
          <div key={car.id} className={styles.carGridColumn}>
            <CarCard {...car} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarGrid;
