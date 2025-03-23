import React from 'react';
import styles from './styles.module.scss';
import videoMain from '../../assets/video-section.png';

export default function Video() {
  return (
    <section className={styles.video}>
      <img className={styles.image} src={videoMain} alt="" />
    </section>
  );
}
