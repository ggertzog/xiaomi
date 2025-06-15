import React from 'react';
import styles from './styles.module.scss';
import verticalImg from '@/assets/vertical.png';
import vertical2Img from '@/assets/vertical2.svg';

export default function Vertcial() {
  return (
    <div className={styles.vertical}>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <img className={styles.image} src={verticalImg} alt="label" />
          <img className={styles.image} src={verticalImg} alt="label" />
          <img className={styles.imageSecond} src={vertical2Img} alt="label" />
        </div>

        <div className={styles.imgContainer}>
          <img className={styles.image} src={verticalImg} alt="label" />
          <img className={styles.imageSecond} src={vertical2Img} alt="label" />
        </div>
      </div>
    </div>
  );
}
