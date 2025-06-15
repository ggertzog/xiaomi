import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { backgroundWords, buttonData, content } from './constants/constants';
import phone from '@/assets/phone.png';
import { FilterControls } from './components/filter-controls/FilterControls';
import { SliderContent } from './components/slider-content/SliderContent';
import { BackgroundSlider } from './components/background-slider/BackgroundSlider';
import { ANIMATION_STAGES, AnimationStage } from './types/types';

export default function FilterSlider() {
  const [currentSlide, setCurrentSlide] = useState<number>(1);
  const [animationStage, setAnimationStage] = useState<AnimationStage>(ANIMATION_STAGES.ENTERING);
  const [prevSlideIndex, setPrevSlideIndex] = useState<number | null>(null);
  const [animationDelays, setAnimationDelays] = useState<Record<number, number>>({});
  const [blink, setBlink] = useState<boolean>(false);

  const startAnimation = (nextSlide: number, index: number) => {
    if (animationStage !== ANIMATION_STAGES.CURRENTLY) return;
    const delays: Record<number, number> = {};
    content[index].forEach((_, i) => {
      delays[i] = i * 250;
    });
    setAnimationDelays(delays);
    setPrevSlideIndex(currentSlide);
    setBlink(true);
    setAnimationStage(ANIMATION_STAGES.EXITING);

    setTimeout(() => {
      setCurrentSlide(nextSlide);
      setAnimationStage(ANIMATION_STAGES.ENTERING);
    }, 900);
  };

  const handleNext = () => {
    const nextSlide = currentSlide < content.length ? currentSlide + 1 : 1;
    startAnimation(nextSlide, currentSlide - 1);
  };

  useEffect(() => {
    if (animationStage === ANIMATION_STAGES.ENTERING) {
      const timer = setTimeout(() => {
        setBlink(false);
        setAnimationStage(ANIMATION_STAGES.CURRENTLY);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [animationStage, currentSlide]);

  const handleSlideTo = (index: number) => {
    if (animationStage !== ANIMATION_STAGES.CURRENTLY || index + 1 === currentSlide) return;
    startAnimation(index + 1, currentSlide - 1);
  };

  return (
    <section className={styles.filter}>
      <div className={styles.container}>
        <FilterControls
          currentSlide={currentSlide}
          handleSlideTo={handleSlideTo}
          buttonData={buttonData}
        />

        <SliderContent
          currentSlide={currentSlide}
          animationStage={animationStage}
          animationDelays={animationDelays}
          prevSlideIndex={prevSlideIndex}
          handleNext={handleNext}
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
