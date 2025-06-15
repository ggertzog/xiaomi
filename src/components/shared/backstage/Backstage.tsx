import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { cn } from '@/lib/utils.js';
import { NextButton } from '@/components/ui';
import { content } from './slider-images/index';
import background from '@/assets/backstage-background.png';
import arrow from '@/assets/arrow.png';

const ANIMATION_STAGES = {
  CURRENTLY: 'currently',
  EXITING: 'exiting',
  ENTERING: 'entering',
};

export default function Backstage() {
  const [currentSlide, setCurrentSlide] = useState<number>(1);
  const [animationStage, setAnimationStage] = useState(ANIMATION_STAGES.ENTERING);
  const [prevSlideIndex, setPrevSlideIndex] = useState<number | null>(null);
  const [animationDelays, setAnimationDelays] = useState<Record<number, number>>({});

  const startAnimation = (nextSlide: number, index: number) => {
    if (animationStage !== ANIMATION_STAGES.CURRENTLY) return;
    const delays: Record<number, number> = {};
    content[index].forEach((_, i) => {
      delays[i] = i * 250;
    });
    setAnimationDelays(delays);
    setPrevSlideIndex(currentSlide);
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
        setAnimationStage(ANIMATION_STAGES.CURRENTLY);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [animationStage, currentSlide]);

  return (
    <section className={styles.backstage}>
      <div className={styles.container}>
        <div className={styles.background}>
          <img className={styles.backgroundImage} src={background} alt="background" />
        </div>

        <div className={styles.description}>
          <h3 className={styles.title}>backstage</h3>
          <p className={styles.text}>
            В&nbsp;поддержку капсулы команда AYT&Lambda;&Omicron; CREATIVE сняла видео-
            и&nbsp;фотокампейн, отправившись на Северный Кавказ, к&nbsp;подножию Эльбруса, через
            водопады и&nbsp;мистические заброшенные усадьбы. Весь фото- и&nbsp;видеоконтент созданы
            с&nbsp;помощью Mi&nbsp;10T Pro.
          </p>
        </div>
        <div className={styles.slider}>
          {content.map((sliderItem, arrIndex) => (
            <div
              key={arrIndex}
              className={cn(
                styles.sliderContainer,
                currentSlide === arrIndex + 1 && styles.active,
              )}>
              {sliderItem.map((img, imgIndex) => (
                <div className={styles.imageContainer} key={`${arrIndex} + ${imgIndex}`}>
                  <img
                    src={img.content}
                    alt={`image ${imgIndex}`}
                    className={cn(
                      styles.sliderImage,
                      animationStage === ANIMATION_STAGES.ENTERING &&
                        arrIndex + 1 === currentSlide &&
                        styles.nextImage,
                      animationStage === ANIMATION_STAGES.EXITING &&
                        arrIndex + 1 === prevSlideIndex &&
                        styles.prevImage,
                      animationStage === ANIMATION_STAGES.CURRENTLY &&
                        arrIndex + 1 === currentSlide &&
                        styles.currentImage,
                    )}
                    style={{ '--delay': `${animationDelays[imgIndex] || 0}ms` } as React.CSSProperties}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className={styles.buttonContainer}>
          <NextButton title="далее" onClick={handleNext}>
            <img src={arrow} className={styles.arrow} alt="arrow" />
          </NextButton>
        </div>
      </div>
    </section>
  );
}
