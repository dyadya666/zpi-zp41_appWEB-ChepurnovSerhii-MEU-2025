import React from 'react';
import styles from '../styles/CarRental.module.css';


export default function Navigation() {
    return (
        <nav className={styles.sideNav}>
            <div className={styles.carSelector}>
                <h1 className={styles.selectorTitle}>Choose a car</h1>
                <button className={styles.filterButton}>accessible</button>
                <button className={styles.filterButton}>interesting</button>
                <button className={styles.filterButton}>major</button>
            </div>
        </nav>
    );
}