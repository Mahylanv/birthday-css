import React from 'react';
import styles from './componentStyle.module.scss';

function ComposantUn() {
  return (
    <div className={styles.nav}>
        <p className={styles.titre}>CITATIONS ET ANNIVERSAIRES</p>
        <p className={styles.date}>MERCREDI 08 MARS 2023</p>
    </div>
  );
}

export default ComposantUn;
