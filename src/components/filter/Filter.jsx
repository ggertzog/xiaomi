import React from 'react';
import styles from './styles.module.scss';

import { Button, NextButton } from '../ui';

import phoneMain from '@/assets/phone-main.png';
import arrow from '@/assets/arrow.png';
import phone from '@/assets/phone.png';

export default function Filter() {
  return (
    <section className={styles.filter}>
      <div className={styles.container}>
        <div className={styles.box}>
          <h3 className={styles.title}>фильтры</h3>
          <div className={styles.buttonContainer}>
            <Button title="cyberpunk" />
            <Button title="color focus" />
            <Button title="gold vibes" />
            <Button title="black ice" />
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.videoContainer}>
            <img className={styles.video} src={phoneMain} alt="video" />
            <p className={styles.description}>
              Неоново-голубые и электрически-лиловые оттенки для создания футуристических эффектов.
            </p>
          </div>
          <div className={styles.nextFilter}>
            <p>01 / 04</p>
            <NextButton title="Следующий фильтр">
              <img className={styles.arrow} src={arrow} alt="arrow" />
            </NextButton>
          </div>
        </div>

        <div className={styles.phone}>
          <img className={styles.phoneImage} src={phone} alt="phone" />
          <a className={styles.link} href="#">
            КУПИТЬ Серию Mi&nbsp;10T
          </a>
          <a className={styles.link} href="#">
            купить вещи из&nbsp;коллекции
          </a>
        </div>
      </div>
    </section>
  );
}
