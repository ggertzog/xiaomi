import React from 'react';
import styles from './styles.module.scss';
import previewTitle from '@/assets/preview-title.png';
import previewTitleMobile from '@/assets/preview-title-mobile.png';

import natureVideo from '@/assets/video/100408-video-1080.mp4';
import { BackgroundVideo } from '../../ui';

export default function Preview({ coloborationRef }) {
  return (
    <section ref={coloborationRef} className={styles.preview}>
      <div className={styles.container}>
        <img className={styles.logo} src={previewTitle} alt="xiaomi" />
        <img className={styles.logoMobile} src={previewTitleMobile} alt="xiaomi" />
        <p className={styles.text}>
          Капсульная коллекция, вдохновленная M<span>i</span>&nbsp;10T series
        </p>
      </div>

      <div className={styles.background}>
        <BackgroundVideo
          src={natureVideo}
          className={styles.video}
          loop
          playsInline
          autoPlay
          muted
        />
      </div>
    </section>
  );
}
