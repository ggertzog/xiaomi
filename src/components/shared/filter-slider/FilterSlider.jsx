import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';

import { NextButton, Button } from '@/components/ui';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller } from 'swiper/modules';
import 'swiper/scss';

import { horizontalContent, verticalContent } from './slider-images';

import arrow from '@/assets/arrow.png';
import phone from '@/assets/phone.png';

const buttonData = [
  { id: 1, title: 'cyberpunk' },
  { id: 2, title: 'color focus' },
  { id: 3, title: 'gold vibes' },
  { id: 4, title: 'black ice' },
];

export default function Slider() {
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    if (firstSwiper && secondSwiper) {
      firstSwiper.controller.control = secondSwiper;
      secondSwiper.controller.control = firstSwiper;
    }
  }, [firstSwiper, secondSwiper]);

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
    <section className={styles.filter}>
      <div className={styles.container}>
        <div className={styles.box}>
          <h3 className={styles.title}>фильтры</h3>
          <div className={styles.buttonContainer}>
            {buttonData.map((item, index) => (
              <Button key={item.id} title={item.title} onClick={() => handleSlideTo(index)} />
            ))}
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.videoContainer}>
            <div className={styles.slider}>
              <div className={styles.sliderContainer}>
                <Swiper
                  className={styles.sliderFirst}
                  spaceBetween={10}
                  modules={[Controller]}
                  onSwiper={(swiper) => setFirstSwiper(swiper)}
                  onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex + 1)}>
                  {horizontalContent.map((item) => (
                    <SwiperSlide key={item.id}>
                      <img className={styles.image} src={item.content} alt="slide" />
                    </SwiperSlide>
                  ))}
                </Swiper>

                <Swiper
                  className={styles.sliderSecond}
                  spaceBetween={10}
                  modules={[Controller]}
                  onSwiper={(swiper) => setSecondSwiper(swiper)}>
                  {verticalContent.map((item) => (
                    <SwiperSlide key={item.id}>
                      <img className={styles.image} src={item.content} alt="slide" />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className={styles.nextFilter}>
                <p>
                  {String(currentSlide).padStart(2, '0')} / {String(4).padStart(2, '0')}
                </p>
                <NextButton title="Следующий фильтр" onClick={handleNext}>
                  <img className={styles.arrow} src={arrow} alt="arrow" />
                </NextButton>
              </div>
            </div>
            <p className={styles.description}>
              Неоново-голубые и электрически-лиловые оттенки для создания футуристических эффектов.
            </p>
          </div>
        </div>
        <div className={styles.phone}>
          <img className={styles.phoneImage} src={phone} alt="phone" />
          <a className={styles.link} href="#">
            КУПИТЬ Серию Mi&nbsp;10T
          </a>
          <a className={styles.link} href="#">
            купить вещи из&nbsp;коллекции
          </a>
        </div>
      </div>
    </section>
  );
}
