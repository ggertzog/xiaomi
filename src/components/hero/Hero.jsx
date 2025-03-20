import React from 'react';
import styles from './styles.module.scss';

import heroBackground from '../../assets/hero-background.png';
import heroMain from '../../assets/hero-main.png';
import heroLogo from '../../assets/hero-icon.png';
import model from '../../assets/model.png';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.figure}>
      <img className={styles.model} src={model} alt="model" />

        <div className={styles.container}>
          <p className={styles.text}>
            Новая флагманская серия Mi&nbsp;10T&nbsp;&mdash; это не&nbsp;просто невероятный сплав
            мощности и&nbsp;творчества. Это креативная фабрика, которая благодаря характеристикам
            камеры, программному обеспечению и&nbsp;дизайну вдохновляет на&nbsp;самовыражение,
            раскрывает творческий потенциал и&nbsp;позволяет создавать фото- и&nbsp;видеоконтент
            высокого уровня без установки дополнительных приложений. <br />
            <br />
            Добавляйте цвета, &laquo;клонируйте&raquo;, экспериментируйте
            с&nbsp;выдержкой&nbsp;&mdash; раскрывайте свою креативность с&nbsp;серией Mi&nbsp;10T.
          </p>
        </div>

        <div className={styles.phoneBlock}>
          <img className={styles.phone} src={heroMain} alt="phone" />
          <a className={styles.link} href="#">
            ПОДРОБНЕЕ О&nbsp;СЕРИИ Mi&nbsp;10T
          </a>
        </div>

        <div className={styles.container}>
          <img className={styles.logo} src={heroLogo} alt="logo" />
          <p className={styles.text}>
            За&nbsp;6&nbsp;лет существования AYT&Lambda;&Omicron; зарекомендовал себя как
            независимый бренд с&nbsp;характером, известный провокационной и&nbsp;яркой подачей
            с&nbsp;идейной подоплекой. Бренд занимает свое признанное место в&nbsp;мире авангардной
            российской моды и&nbsp;создает концептуальные паттерны во&nbsp;всех фэшн сегментах,
            начиная от&nbsp;обуви и&nbsp;заканчивая верхней одеждой
            <br />
            <br />
            Деятельность AYT&Lambda;&Omicron; охватывает широкий спектр проектов от&nbsp;знаковых
            вечеринок и&nbsp;громких коллабораций до&nbsp;удостоенных наградами фильмов
            и&nbsp;участия в&nbsp;Парижской и&nbsp;Миланской неделях моды.
          </p>
        </div>

        <img className={styles.background} src={heroBackground} alt="background" />
      </div>
    </section>
  );
}
