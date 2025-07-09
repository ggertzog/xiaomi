import React, { RefObject } from 'react';
import styles from './styles.module.scss';
import data from './mock-data';
import { SocialLink } from '@/components/ui';
import { ShopButton } from '@/components/ui/shop-button/shop-button';

interface ShopProps {
  shopRef: RefObject<HTMLElement | null>;
}

//READY: обернуть список в тернарную проверку
//READY: переработать нейминг сошлАйкон в сошлЛинк +
//READY: батон вынести в компонент

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
          <ShopButton>
            Купить онлайн <br />
            смартфон из&nbsp;серии Mi&nbsp;10T
          </ShopButton>
          <ShopButton>
            Купить онлайн <br />
            вещи из&nbsp;капсульной коллекции
          </ShopButton>
        </div>
        {data ? (
          <ul className={styles.iconContainer}>
            {data.map((item) => (
              <SocialLink key={item.id} {...item} />
            ))}
          </ul>
        ) : null}
        <p className={styles.copyright}>
          &copy;&nbsp;2020 Xiaomi &amp;&nbsp;AYT&Lambda;&Omicron; Creative. Все права защищены
        </p>
      </div>
    </section>
  );
}
