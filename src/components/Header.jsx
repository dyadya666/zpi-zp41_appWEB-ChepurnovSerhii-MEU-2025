import React from 'react';
import LogoImage from './LogoImage';
import styles from '../styles/CarRental.module.css';
import home from '../assets/images/home.png'
import signup from '../assets/images/signup.png'
import login from '../assets/images/login.png'

const logos = [
  { src: home, size: "regular" },
  { src: signup, size: "regular" },
  { src: login, size: "regular" }
];

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.logoWrapper}>
        <button className={styles.socialButton}><LogoImage src={logos[0].src} size={logos[0].size} /></button>
      </div>
      <p className={styles.banner}>Cars Rental</p>
      <div className={styles.autorise}>
      <div className={styles.logoWrapper}>
        <button className={styles.socialButton}><LogoImage src={logos[1].src} size={logos[1].size} /></button>
      </div>
      <div className={styles.logoWrapper}>
        <button className={styles.socialButton}><LogoImage src={logos[2].src} size={logos[2].size} /></button>
      </div>
      </div>
    </header>
  );
}
