import React from 'react';
import styles from './styles.module.scss';
import youtube from '../../assets/youtube.svg';
import insta from '../../assets/insta.svg';
import fb from '../../assets/fb.svg';
import vk from '../../assets/vk.svg';
import tiktok from '../../assets/tiktok.svg';
import mi from '../../assets/mi.svg';

export default function Shop() {
  return (
    <section className={styles.shop}>
      <div className={styles.container}>
        <h3 className={styles.title}>где купить</h3>
        <p className={styles.description}>
          Оформить заказ на&nbsp;смартфон из&nbsp;серии Mi&nbsp;10T и&nbsp;купить вещи
          из&nbsp;капсульной коллекции можно на&nbsp;2-м этаже Универмага &laquo;Цветной&raquo;,
          по&nbsp;адресу: <br />
          <span>Цветной бульвар, д.15, стр.&nbsp;1</span>
        </p>
        <p className={styles.discount}>
          Для участников Mi&nbsp;Community эксклюзивная скидка&nbsp;15% на&nbsp;вещи из капсульной
          коллекции и&nbsp;5% скидка на&nbsp;покупку смартфона из&nbsp;серии Mi&nbsp;10T только
          в&nbsp;Универмаге &laquo;Цветной&raquo;. За&nbsp;подробностями обращайтесь к консультантам
          корнера на&nbsp;2-м этаже.
        </p>
        <div className={styles.buttonContainer}>
          <button className={styles.button}>
            Купить онлайн <br />
            смартфон из&nbsp;серии Mi&nbsp;10T
          </button>
          <button className={styles.button}>
            Купить онлайн <br />
            вещи из&nbsp;капсульной коллекции
          </button>
        </div>
        <div className={styles.iconContainer}>
          <a href="#">
            <img src={youtube} alt="youtube" />
          </a>
          <a href="#">
            <img src={insta} alt="insta" />
          </a>
          <a href="#">
            <img src={fb} alt="fb" />
          </a>
          <a href="#">
            <img src={vk} alt="vk" />
          </a>
          <a href="#">
            <img src={tiktok} alt="tiktok" />
          </a>
          <a href="#">
            <img src={mi} alt="mi" />
          </a>
        </div>
        <p className={styles.copyright}>&copy;&nbsp;2020 Xiaomi &amp;&nbsp;AYT&Lambda;&Omicron; Creative. Все права защищены</p>
      </div>
    </section>
  );
}
