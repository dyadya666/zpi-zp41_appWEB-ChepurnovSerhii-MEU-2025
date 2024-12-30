import React from 'react';
import styles from '../styles/CarRental.module.css';
import fb from '../assets/images/facebook.svg';
import tlg from '../assets/images/telegram.png';
import xlogo from '../assets/images/x-logo.svg';

function SocialLinks() {
  const socialLinks = [
    { id: 1, image: fb, name: 'Facebook' },
    { id: 2, image: tlg, name: 'Telegram' },
    { id: 3, image: xlogo, name: 'Twitter' }
  ];

  return (
    <div className={styles.socialLinks}>
      {socialLinks.map(link => (
        <button className={styles.socialButton}>
        <img
          key={link.id}
          loading="lazy"
          src={link.image}
          alt={`${link.name} social link`}
          className={styles.socialIcon}
        />
        </button>
      ))}
    </div>
  );
}

export default SocialLinks;
