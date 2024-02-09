import React from 'react';
import styles from './componentStyle.module.scss';
import anniv from '../anniv.svg'
import star from '../star.svg'


function ComposantTrois() {
  return <div className={styles.gauche}>
          <img className={styles.star} src={star} />
          <img className={styles.star1} src={star} />
          <img className={styles.star2} src={star} />
      <img className={styles.anniv} src={anniv} />
      <p className={styles.name}>MAX RICHET</p>
  </div>;
}

export default ComposantTrois;
