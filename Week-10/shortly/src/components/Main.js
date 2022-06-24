import React from 'react';
import Shortener from './Shortener';
import styles from './Main.module.css';

export default function Main() {
  return (
    <>
      <div className={styles.container}>
        <div>
          <h2>More than just shorter Links</h2>
          <div>
            Build your brand's recognition and get detailed insight on how you
            links are performing
          </div>
        </div>
        <img
          src="https://img.freepik.com/free-vector/freelancer-working-laptop-her-house_1150-35048.jpg?t=st=1654868282~exp=1654868882~hmac=045366a096dbccdad839062436cc62847a659acf9a2b92144e9b704852fd1610&w=740"
          alt="person working on computer"
        />
      </div>
      <Shortener />
    </>
  );
}
