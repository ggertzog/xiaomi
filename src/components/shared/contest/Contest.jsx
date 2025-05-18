import React from 'react';
import styles from './styles.module.scss';
import contestImg from '@/assets/contest-img.png';

export default function Contest() {
  return (
    <section className={styles.contest} aria-label="Конкурс от Xiaomi">
      <div className={styles.container}>
        <img
          className={styles.image}
          src={contestImg}
          alt="Призы конкурса: смартфон и коллекция Xiaomi"
          loading="lazy"
        />
        <h2 className={styles.title}>
          <span>ВЫИГРАЙ СМАРТФОН </span>
          <br />
          <span>Mi 10T PRO </span>
          <br />
          <span>И СЕТ-КОЛЛЕКЦИЮ </span>
          <br />
          <span>XIAOMI и AYTΛΟ CREATIVE</span>
        </h2>
        <div className={styles.text}>
          <p>Все просто:</p>
          <ol className={styles.stepsList}>
            <li>1) Выложите фото/видео с маской в сториз или ленту Instagram</li>
            <li>2) Отметьте и подпишитесь на @xiaomi.russia</li>
          </ol>
          <p>Уже 15 декабря мы выберем и наградим трех победителей среди всех участников!</p>
        </div>
        <a href="#подробнее" className={styles.link} aria-label="Узнать подробности конкурса">
          ПОДРОБНЕЕ
        </a>
      </div>
    </section>
  );
}
