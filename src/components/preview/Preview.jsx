import React from 'react';
import styles from './styles.module.scss';
import previewImage from '@/assets/preview-image.png';
import previewTitle from '@/assets/preview-title.png';

export default function Preview() {
  return (
    <section className={styles.preview}>
      <div className={styles.container}>
        <img className={styles.logo} src={previewTitle} alt="xiaomi" />
        <p className={styles.text}>Капсульная коллекция, вдохновленная M<sapn>i</sapn>&nbsp;10T series</p>
      </div>

      {/* Пока нет ссылки на видео использую фото */}
      <img className={styles.background} src={previewImage} alt="background" />
    </section>
  );
}
