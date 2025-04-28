import React from 'react';
import styles from './styles.module.scss';
import data from './mock-data';
import { Icon } from '../../ui';

export default function Shop({shopRef}) {
  return (
    <section className={styles.shop}>
      <div ref={shopRef} className={styles.container}>
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
          {data.map((item) => (
            <Icon key={item.id} src={item.src} alt={item.alt} />
          ))}
        </div>
        <p className={styles.copyright}>
          &copy;&nbsp;2020 Xiaomi &amp;&nbsp;AYT&Lambda;&Omicron; Creative. Все права защищены
        </p>
      </div>
    </section>
  );
}
