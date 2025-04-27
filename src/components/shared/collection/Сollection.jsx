import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { cn } from '@/lib/utils.js';
import { Button, NextButton } from '../../ui';
import arrow from '@/assets/arrow.png';
import { collectionBackgroundImages, collectionImages } from './slider-images';

const buttonContent = ['look01', 'look02', 'look03', 'look04', 'look05'];

const ANIMATION_STAGES = {
  CURRENTLY: 'currently',
  EXITING: 'exiting',
  ENTERING: 'entering',
};

export default function Сollection() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [animationStage, setAnimationStage] = useState(ANIMATION_STAGES.CURRENTLY);
  const [prevSlideIndex, setPrevSlideIndex] = useState(null);
  const [animationDelays, setAnimationDelays] = useState({});
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const startAnimation = (nextSlide, index) => {
    if (animationStage !== ANIMATION_STAGES.CURRENTLY) return;
    const delays = {};
    collectionImages[index].forEach((_, i) => {
      delays[i] = i * 100;
    });
    setAnimationDelays(delays);
    setPrevSlideIndex(currentSlide);
    setAnimationStage(ANIMATION_STAGES.EXITING);

    const maxDelay = delays[collectionImages[index].length - 1] || 0;
    const exitDuration = 1000 + maxDelay;

    setTimeout(() => {
      setAnimationStage(ANIMATION_STAGES.ENTERING);
      setCurrentSlide(nextSlide);
    }, exitDuration);
  };

  const handleNext = () => {
    const nextSlide = currentSlide < collectionImages.length ? currentSlide + 1 : 1;
    startAnimation(nextSlide, currentSlide - 1);
  };

  const handleSlideTo = (index) => {
    if (animationStage !== ANIMATION_STAGES.CURRENTLY || index + 1 === currentSlide) return;
    startAnimation(index + 1, currentSlide - 1);
  };

  useEffect(() => {
    if (animationStage === ANIMATION_STAGES.ENTERING) {
      const timer = setTimeout(() => {
        setAnimationStage(ANIMATION_STAGES.CURRENTLY);
      }, 1450);

      return () => clearTimeout(timer);
    }
  }, [animationStage, currentSlide]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className={styles.collection}>
      <div className={styles.container}>
        {windowWidth > 376 &&
          collectionBackgroundImages.map((item, index) => (
            <img
              className={cn(styles.background, index === currentSlide - 1 && styles.active)}
              key={item.id}
              src={item.content}
              alt={item.alt}
            />
          ))}

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

          <div className={styles.slider}>
            {collectionImages.map((arr, arrIndex) => (
              <div
                key={arrIndex}
                className={cn(
                  styles.sliderContainer,
                  arrIndex + 1 === currentSlide && styles.active,
                )}>
                {arr.map((item, itemIndex) => (
                  <div className={cn(styles.imageContainer)} key={`${arrIndex}-${itemIndex}`}>
                    <img
                      className={cn(
                        styles.sliderImage,
                        animationStage === ANIMATION_STAGES.EXITING &&
                          arrIndex + 1 === prevSlideIndex &&
                          styles.prevImage,
                        animationStage === ANIMATION_STAGES.ENTERING &&
                          arrIndex + 1 === currentSlide &&
                          styles.nextImage,
                      )}
                      style={{ '--delay': `${animationDelays[itemIndex] || 0}ms` }}
                      src={item.content}
                    />
                  </div>
                ))}
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
