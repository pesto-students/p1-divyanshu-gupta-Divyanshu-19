import React from 'react';
import styles from './Header.module.css';

export default function Header() {
  return (
    <div className={styles.container}>
      <h1>Shortly</h1>
      <div className={styles.nav}>
        <a href="/">Home</a>
        <a href="/">Services</a>
        <a href="/">Contact Us</a>
      </div>
    </div>
  );
}
