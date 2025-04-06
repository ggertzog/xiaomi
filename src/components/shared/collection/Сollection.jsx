import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';

import { cn } from '@/lib/utils.js';

import { Button, NextButton } from '../../ui';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/css/effect-creative';

import arrow from '@/assets/arrow.png';
import cap from '@/assets/cap.png';
import jacket from '@/assets/jacket.png';
import {
  mainCollectionImages,
  secondCollectionImages,
  collectionBackgroundImages,
} from './slider-images';

const buttonContent = ['look01', 'look02', 'look03', 'look04', 'look05'];

export default function Сollection() {
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(1);

  const handleNext = () => {
    if (firstSwiper) {
      firstSwiper.slideNext();
    }
  };

  const handleSlideTo = (index) => {
    if (firstSwiper) {
      firstSwiper.slideTo(index);
    }
  };

  return (
    <section className={styles.collection}>
      <div className={styles.container}>
        {collectionBackgroundImages.map((item, index) => (
          <img
            className={cn(styles.background, index === currentSlide - 1 && styles.active)}
            key={item.id}
            src={item.content}
            alt={item.alt}
          />
        ))}
        <img className={styles.cap} src={cap} alt="cap" />
        <img className={styles.jacket} src={jacket} alt="jacket" />

        <div className={styles.content}>
          <div className={styles.box}>
            <h2 className={styles.title}>коллекция</h2>
            <div className={styles.buttonContainer}>
              {buttonContent.map((item, index) => (
                <Button
                  key={index}
                  title={item}
                  active={index === currentSlide - 1 ? 'activeButton' : ''}
                  onClick={() => handleSlideTo(index)}
                />
              ))}
            </div>
          </div>

          <Swiper
            className={styles.mainSwiper}
            modules={[EffectCreative]}
            slidesPerView="auto"
            effect="creative"
            creativeEffect={{
              prev: {
                translate: ['-500%', 0, 0],
                transition: {
                  duration: 1000,
                },
              },
              next: {
                translate: ['500%', 0, 0],
                transition: {
                  duration: 1000,
                },
              },
            }}
            spaceBetween={200}
            speed={2500}
            onSwiper={(swiper) => setFirstSwiper(swiper)}
            onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex + 1)}>
            {mainCollectionImages.map((item) => (
              <SwiperSlide key={item.id} className={styles.mainSlide}>
                <img
                  className={styles.mainSliderImage}
                  src={item.content}
                  alt={item.alt}
                  onAnimationEnd={() => {}}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className={styles.sliderContainer}>
            {secondCollectionImages.map((item, index) => (
              <div
                key={item.id}
                className={cn(
                  styles.secondSlider,
                  index === currentSlide - 1 && styles.secondSliderActive,
                )}>
                <img
                  className={cn(
                    styles.secondSliderImage,
                    index - 1 === currentSlide && styles.slideOutToLeft,
                    index && styles.slideInFromRight,
                  )}
                  src={item.content}
                  alt={item.alt}
                />
              </div>
            ))}
          </div>

          <div className={styles.nextLook}>
            <p>
              {String(currentSlide).padStart(2, '0')} /{' '}
              {String(buttonContent.length).padStart(2, '0')}
            </p>
            <NextButton title="следующий образ" onClick={handleNext}>
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
