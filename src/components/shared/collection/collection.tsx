import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { cn } from '@/lib/utils.js';
import { TabButton, NextButton } from '@/components/ui';
import arrow from '@/assets/arrow.png';
import { collectionBackgroundImages, collectionImages } from './slider-images';

type ButtonData = string;

const buttonContent: ButtonData[] = ['look01', 'look02', 'look03', 'look04', 'look05'];

const ANIMATION_STAGES = {
  CURRENTLY: 'currently',
  EXITING: 'exiting',
  ENTERING: 'entering',
};

export default function Сollection() {
  const [currentSlide, setCurrentSlide] = useState<number>(1);
  const [animationStage, setAnimationStage] = useState(ANIMATION_STAGES.ENTERING);
  const [prevSlideIndex, setPrevSlideIndex] = useState<number | null>(null);
  const [animationDelays, setAnimationDelays] = useState<Record<number, number>>({});

  const startAnimation = (nextSlide: number, index: number) => {
    if (animationStage !== ANIMATION_STAGES.CURRENTLY) return;

    const delays: Record<number, number> = {};
    collectionImages[index].forEach((_, i) => {
      delays[i] = i * 150;
    });
    setAnimationDelays(delays);
    setPrevSlideIndex(currentSlide);
    setAnimationStage(ANIMATION_STAGES.EXITING);

    const maxDelay = Math.max(...Object.values(delays));
    const exitDuration = 500 + maxDelay;

    setTimeout(() => {
      setCurrentSlide(nextSlide);
      setAnimationStage(ANIMATION_STAGES.ENTERING);
    }, exitDuration);
  };

  const handleNext = () => {
    const nextSlide = currentSlide < collectionImages.length ? currentSlide + 1 : 1;
    startAnimation(nextSlide, currentSlide - 1);
  };

  const handleSlideTo = (index: number) => {
    if (animationStage !== ANIMATION_STAGES.CURRENTLY || index + 1 === currentSlide) return;
    startAnimation(index + 1, currentSlide - 1);
  };

  useEffect(() => {
    if (animationStage === ANIMATION_STAGES.ENTERING) {
      const timer = setTimeout(() => {
        setAnimationStage(ANIMATION_STAGES.CURRENTLY);
      }, 1400);

      return () => clearTimeout(timer);
    }
  }, [animationStage, currentSlide]);


  //TODO: заменить стандартную кнопку проигрывания
  //READY: переделать (настроить) импорты под алиас (вроде сделал, но хочу уточнить стоит ли в компонентах делать импорты алиас)
  //READY: переделать все названия под кебаб кейс

  return (
    <section className={styles.collection}>
      <div className={styles.container}>
        {collectionBackgroundImages.map((item, index) => (
          <img
            className={cn(styles.background, index === currentSlide - 1 && styles.activeBackground)}
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
                <TabButton
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
                  <div className={cn(styles.imageContainer)} key={`${arrIndex} + ${itemIndex}`}>
                    <img
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
                      style={
                        { '--delay': `${animationDelays[itemIndex] || 0}ms` } as React.CSSProperties
                      }
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
