import React from 'react';
import styles from './styles.module.scss';
import letterA from '@/assets/letter-a.png';
import conceptVideo from '@/assets/concept-video.png';

export default function Concept() {
  return (
    <section className={styles.concept}>
      <div className={styles.container}>
        <div className={styles.info}>
          <h3 className={styles.title}>концепция</h3>
          <p className={styles.text}>
            В&nbsp;современном мире телефон перестал быть только инструментом для решения
            повседневных задач. Это мост между нашим внутренним и&nbsp;внешним мирами,
            а&nbsp;камера&nbsp;&mdash; словно&nbsp;AR для нашего зрения. С&nbsp;функционалом
            телефона вы&nbsp;можете под другим углом посмотреть на&nbsp;мир вокруг, подчеркнуть свое
            индивидуальное восприятие и&nbsp;раскрыть свою креативность.
            <br />
            <br />
            Так появилась идея коллаборации XIAOMI и&nbsp;AYT&Lambda;&Omicron; CREATIVE. Флагманская
            серия Mi&nbsp;10T благодаря своим характеристикам и дизайну вдохновила креативную
            студию на&nbsp;создание капсульной коллекции одежды, основная идея которой
            переосмысливает функциональность смартфона в&nbsp;повседневной жизни. Цветовая палитра
            капсулы представляет собой квинтэссенцию новых светофильтров серии Mi&nbsp;10T
            (Cyberpunk, Gold Vibes, Black Ice и&nbsp;Color Focus).
          </p>
        </div>

        <img className={styles.letterA} src={letterA} alt="a" />

        <img className={styles.video} src={conceptVideo} alt="video" />
      </div>
    </section>
  );
}
