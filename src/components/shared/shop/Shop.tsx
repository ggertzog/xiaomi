import React, { RefObject } from 'react';
import styles from './styles.module.scss';
import data from './mock-data';
import { SocialIcon } from '@/components/ui';

interface ShopProps {
  shopRef: RefObject<HTMLElement | null>;
}

export default function Shop({ shopRef }: ShopProps) {
  return (
    <section ref={shopRef} className={styles.shop}>
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
          <button type="button" className={styles.button}>
            Купить онлайн <br />
            смартфон из&nbsp;серии Mi&nbsp;10T
          </button>
          <button type="button" className={styles.button}>
            Купить онлайн <br />
            вещи из&nbsp;капсульной коллекции
          </button>
        </div>
        {(data ?? []).length > 0 && (
          <ul className={styles.iconContainer}>
            {data.map((item) => (
              <SocialIcon key={item.id} {...item} />
            ))}
          </ul>
        )}
        <p className={styles.copyright}>
          &copy;&nbsp;2020 Xiaomi &amp;&nbsp;AYT&Lambda;&Omicron; Creative. Все права защищены
        </p>
      </div>
    </section>
  );
}
