import React from 'react';
import styles from '../styles/CarRental.module.css';

function CarCard({ image, name, price }) {
  return (
    <div className={styles.carCard}>
      <img
        loading="lazy"
        src={image}
        alt={`${name} rental car`}
        className={styles.carImage}
      />
      <div className={styles.carName}>{name}</div>
      <div className={styles.pricePerDay}>${price} per day</div>
    </div>
  );
}

export default CarCard;
