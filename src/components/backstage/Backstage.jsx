import React from 'react';
import styles from './styles.module.scss';

import { NextButton } from '../ui';

import background from '@/assets/backstage-background.png';
import backstage1 from '@/assets/backstage1.png';
import backstage2 from '@/assets/backstage2.png';
import backstage3 from '@/assets/backstage3.png';
import arrow from '@/assets/arrow.png';

export default function Backstage() {
  return (
    <section className={styles.backstage}>
      <div className={styles.container}>
        <img className={styles.background} src={background} alt="background" />

        <div className={styles.description}>
          <h3 className={styles.title}>backstage</h3>
          <p className={styles.text}>
            В&nbsp;поддержку капсулы команда AYT&Lambda;&Omicron; CREATIVE сняла видео-
            и&nbsp;фотокампейн, отправившись на Северный Кавказ, к&nbsp;подножию Эльбруса, через
            водопады и&nbsp;мистические заброшенные усадьбы. Весь фото- и&nbsp;видеоконтент созданы
            с&nbsp;помощью Mi&nbsp;10T Pro.
          </p>
        </div>
        <div className={styles.slider}>
          <img src={backstage1} alt="photo" />
          <img src={backstage2} alt="photo" />
          <img src={backstage3} alt="photo" />
        </div>
        <div className={styles.buttonContainer}>
        <NextButton title="далее">
          <img src={arrow} className={styles.arrow} alt="arrow" />
        </NextButton>
        </div>
        
        {/* <button className={styles.buttonNext}>
          далее
          <img src={arrow} alt="arrow" />
        </button> */}
      </div>
    </section>
  );
}
