import React from 'react';
import styles from '../styles/CarRental.module.css';

export default function LogoImage({ src, size }) {
  return (
    <img
      loading="lazy"
      src={src}
      className={size === 'small' ? styles.logoSmall : styles.logo}
      alt="Company logo"
    />
  );
}
