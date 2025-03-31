import React from 'react';
import styles from './styles.module.scss';
import previewImage from '@/assets/preview-image.png';
import previewTitle from '@/assets/preview-title.png';

import natureVideo from '@/assets/video/100408-video-1080.mp4';
import { Video } from '../../ui';

export default function Preview() {
  return (
    <section className={styles.preview}>
      <div className={styles.container}>
        <img className={styles.logo} src={previewTitle} alt="xiaomi" />
        <p className={styles.text}>
          Капсульная коллекция, вдохновленная M<span>i</span>&nbsp;10T series
        </p>
      </div>

      {/* Пока нет ссылки на видео использую фото */}
      {/* <img className={styles.background} src={previewImage} alt="background" /> */}
      <div className={styles.background}>
        <Video src={natureVideo} className={styles.video} />
      </div>

      {/* <video autoPlay muted loop playsInline className={styles.background}>
        <source src={natureVideo} type="video/mp4" />
        Ваш браузер не поддерживает видео тег.
      </video> */}
    </section>
  );
}
