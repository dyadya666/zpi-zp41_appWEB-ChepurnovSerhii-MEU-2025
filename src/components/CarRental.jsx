import React from 'react';
import styles from '../styles/CarRental.module.css';
import CarGrid from './CarGrid';
import Header from './Header';
import Navigation from './Navigatiov';
import SocialLinks from './SocialLinks';


function CarRental() {
  return (
    <div className={styles.site}>
      <div className={styles.main}>          
            <Header />
            <Navigation />
            <main className={styles.mainContent}>
                <CarGrid />
            </main>
            <footer className={styles.footer}>
                <SocialLinks />
            </footer>
        </div>
    </div>
  );
}

export default CarRental;
