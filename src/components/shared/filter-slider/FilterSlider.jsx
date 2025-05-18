import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { cn } from '@/lib/utils.js';
import { NextButton, TabButton } from '@/components/ui';
import { content } from './slider-images';
import arrow from '@/assets/arrow.png';
import phone from '@/assets/phone.png';
import { BackgroundVideo } from '../../ui';

const buttonData = [
  { id: 1, title: 'cyberpunk' },
  { id: 2, title: 'color focus' },
  { id: 3, title: 'gold vibes' },
  { id: 4, title: 'black ice' },
];

const backgroundWords = [
  { word: 'киберпанк' },
  { word: 'цветовой фокус' },
  { word: 'золотые волны' },
  { word: 'черный лед' },
];

const ANIMATION_STAGES = {
  CURRENTLY: 'currently',
  EXITING: 'exiting',
  ENTERING: 'entering',
};

export default function FilterSlider() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [animationStage, setAnimationStage] = useState(ANIMATION_STAGES.ENTERING);
  const [prevSlideIndex, setPrevSlideIndex] = useState(null);
  const [animationDelays, setAnimationDelays] = useState({});
  const [blink, setBlink] = useState(false);

  const startAnimation = (nextSlide, index) => {
    if (animationStage !== ANIMATION_STAGES.CURRENTLY) return;
    const delays = {};
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

  const handleSlideTo = (index) => {
    if (animationStage !== ANIMATION_STAGES.CURRENTLY || index + 1 === currentSlide) return;
    startAnimation(index + 1, currentSlide - 1);
  };

  return (
    <section className={styles.filter}>
      <div className={styles.container}>
        <div className={styles.box}>
          <h3 className={styles.title}>
            фильтры&nbsp;<span>01/04</span>
          </h3>
          <div className={styles.buttonContainer}>
            {buttonData.map((item, index) => (
              <TabButton
                key={item.id}
                title={item.title}
                active={index === currentSlide - 1 ? 'activeButton' : ''}
                onClick={() => handleSlideTo(index)}
              />
            ))}
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.videoContainer}>
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
                      {img.type === 'image' ? (
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
                          style={{ '--delay': `${animationDelays[imgIndex] || 0}ms` }}
                        />
                      ) : (
                        <div
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
                          )}>
                          <BackgroundVideo
                            controls
                            loop
                            playsInline
                            src={img.content}
                            className={styles.video}
                            style={{
                              '--delay': `${animationDelays[imgIndex] || 0}ms`,
                            }}
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ))}

              <div className={styles.nextFilter}>
                <p>
                  {String(currentSlide).padStart(2, '0')} /{' '}
                  {String(buttonData.length).padStart(2, '0')}
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
      <div className={styles.backgroundSlider}>
        {backgroundWords.map((item, wordIndex) => (
          <p
            key={wordIndex}
            className={cn(
              styles.customText,
              wordIndex === currentSlide - 1 && styles.customTextActive,
            )}>
            {item.word.split('').map((letter, letterIndex) => (
              <span
                key={`${wordIndex}-${letterIndex}`}
                style={{ '--char-index': letterIndex, '--random-delay': Math.random() }}
                className={cn(blink && styles.blinking)}>
                {letter}
              </span>
            ))}
          </p>
        ))}
      </div>
    </section>
  );
}
