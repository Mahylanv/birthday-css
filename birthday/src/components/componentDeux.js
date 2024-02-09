import React from 'react';
import styles from './componentStyle.module.scss';
import gif from '../gif.svg'



function ComposantDeux() {
  return <div className={styles.droite}>
  <div className={styles.page}>
    <div className={styles.citation}>
      <p className={styles.citationTexte}>
        "I've missed more than 9,000 shots in my career. I've lost almost 300 games. Twenty-six times I've been trusted to take the game-winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed. - Michael Jordan"
      </p>
    </div>
    <img src={gif} />
  </div>
</div>;
}

export default ComposantDeux;