import React, { useState, useEffect, useCallback } from 'react';
import styles from './styles.module.scss';
import { backgroundWords, buttonData, content } from './mock-data/mock-data';
import phone from '@/assets/phone.png';
import { FilterControls } from './components/filter-controls/filter-controls';
import { SliderContent } from './components/slider-content/slider-content';
import { BackgroundSlider } from './components/background-slider/background-slider';
import { ANIMATION_STAGES, AnimationStage } from './types/types';

export default function FilterSlider() {
  const [currentSlide, setCurrentSlide] = useState<number>(1);
  const [animationStage, setAnimationStage] = useState<AnimationStage>(ANIMATION_STAGES.ENTERING);
  const [prevSlideIndex, setPrevSlideIndex] = useState<number | null>(null);
  const [animationDelays, setAnimationDelays] = useState<Record<number, number>>({});
  const [blink, setBlink] = useState<boolean>(false);

  const [nextSlide, setNextSlide] = useState<number | null>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);

  useEffect(() => {
    if (nextSlide !== null && currentSlideIndex !== null) {
      const delays: Record<number, number> = {};
      content[currentSlideIndex].forEach((_, i) => {
        delays[i] = i * 250;
      });
      setAnimationDelays(delays);
      setPrevSlideIndex(currentSlide);
      setBlink(true);
      setAnimationStage(ANIMATION_STAGES.EXITING);

      const timer = setTimeout(() => {
        setCurrentSlide(nextSlide);
        setAnimationStage(ANIMATION_STAGES.ENTERING);
        setNextSlide(null);
      }, 900);

      return () => clearTimeout(timer);
    }
  }, [nextSlide, currentSlideIndex, currentSlide]);

  useEffect(() => {
    if (animationStage === ANIMATION_STAGES.ENTERING) {
      const timer = setTimeout(() => {
        setBlink(false);
        setAnimationStage(ANIMATION_STAGES.CURRENTLY);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [animationStage, currentSlide]);

  const handleClickButton = useCallback(() => {
    if (animationStage !== ANIMATION_STAGES.CURRENTLY) return;
    const next = currentSlide < content.length ? currentSlide + 1 : 1;
    setNextSlide(next);
    setCurrentSlideIndex(currentSlide - 1);
  }, [animationStage, currentSlide]);

  const handleClickTabButton = useCallback(
    (index: number) => {
      if (animationStage !== ANIMATION_STAGES.CURRENTLY || index + 1 === currentSlide) return;
      setNextSlide(index + 1);
      setCurrentSlideIndex(currentSlide - 1);
    },
    [animationStage, currentSlide],
  );

  //READY: Вынести вызов функции из хендлНекст в юзЭффект
  //READY: переработать нейминг хендлеров
  //READY: переработать типизацию ANIMATION_STAGES
  //READY: переименовать констнанты в мок дату

  return (
    <section className={styles.filter}>
      <div className={styles.container}>
        <FilterControls
          currentSlide={currentSlide}
          handleClickTabButton={handleClickTabButton}
          buttonData={buttonData}
        />

        <SliderContent
          currentSlide={currentSlide}
          animationStage={animationStage}
          animationDelays={animationDelays}
          prevSlideIndex={prevSlideIndex}
          handleClickButton={handleClickButton}
          content={content}
        />
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
      <BackgroundSlider
        currentSlide={currentSlide}
        backgroundWords={backgroundWords}
        blink={blink}
      />
    </section>
  );
}
