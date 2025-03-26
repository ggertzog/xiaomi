import React from 'react';
import styles from './styles.module.scss';

import { Button, NextButton } from '../ui';

import arrow from '@/assets/arrow.png';
import collectionBackground from '@/assets/collection-03.png';
import slider1 from '@/assets/slider1.png';
import slider2 from '@/assets/slider2.png';
import cap from '@/assets/cap.png';
import jacket from '@/assets/jacket.png';

export default function Сollection() {
  return (
    <section className={styles.collection}>
      <div className={styles.container}>
        <img className={styles.background} src={collectionBackground} alt="03" />
        <img className={styles.cap} src={cap} alt="cap" />
        <img className={styles.jacket} src={jacket} alt="jacket" />

        <div className={styles.content}>
          <div className={styles.box}>
            <h2 className={styles.title}>коллекция</h2>
            <div className={styles.buttonContainer}>
              <Button title="look01" />
              <Button title="look02" />
              <Button title="look03" />
              <Button title="look04" />
              <Button title="look05" />
            </div>
          </div>

          <div className={styles.slider}>
            <img src={slider1} alt="slider" />
            <img src={slider2} alt="slider" />
          </div>

          <div className={styles.nextLook}>
            <p>03 / 05</p>
            <NextButton title="следующий образ">
              <img className={styles.arrow} src={arrow} alt="arrow" />
            </NextButton>
          </div>
        </div>

        <div className={styles.description}>
          <p className={styles.text}>
            Отправная точка дизайна коллекции&nbsp;&mdash; движение от&nbsp;общего к&nbsp;частному,
            от&nbsp;макрокосмоса к микрокосму. От&nbsp;эволюции, которая дала нам зрение,
            к&nbsp;технологичным инструментам, позволяющим замечать&nbsp;то, на&nbsp;что
            мы&nbsp;ранее не обращали внимание.
            <br />
            <br />
            В&nbsp;капсуле объединены идеи древней алхимии, современной науки
            с&nbsp;ее&nbsp;революционными идеями квантовой механики и&nbsp;сингулярности,
            разгаданной русским гением Григорием Перельманом, и&nbsp;изображения нейронов сетчатки
            глаза.
            <br />
            <br />
            Идея проходит лейтмотивом через всю линейку одежды, раскрывается через слоганы Power
            your creativity и&nbsp;As above so&nbsp;below и&nbsp;воплощается в&nbsp;палитре новых
            светофильтров серии Mi&nbsp;10T.
          </p>
          <p className={styles.link}>
            Раскройте вашу креативность с&nbsp;серией Mi&nbsp;10T <br />
            и&nbsp;AYT&Lambda;&Omicron; CREATIVE.
          </p>
        </div>
      </div>
    </section>
  );
}
