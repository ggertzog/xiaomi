import React from 'react';
import styles from './styles.module.scss';
// import { content } from '@/components/shared/backstage/slider-images';
import { BackgroundVideo, NextButton } from '@/components/ui';
import { cn } from '@/lib/utils';
import poster from '@/assets/preview-image.png';
import arrow from '@/assets/arrow.png';
import { buttonData } from '../../constants/constants';
import { ANIMATION_STAGES, AnimationStage, SliderData } from '../../types/types';

interface SliderContentProps {
  currentSlide: number;
  prevSlideIndex: number | null;
  animationStage: AnimationStage;
  animationDelays: Record<number, number>;
  handleNext: () => void;
  content: SliderData;
}

export const SliderContent = ({
  currentSlide,
  animationStage,
  animationDelays,
  prevSlideIndex,
  handleNext,
  content,
}: SliderContentProps) => {
  return (
    <div className={styles.sliderContent}>
      <div className={styles.slider}>
        {content.map((sliderItem, arrIndex) => (
          <div
            key={arrIndex}
            className={cn(styles.sliderContainer, currentSlide === arrIndex + 1 && styles.active)}>
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
                    style={
                      {
                        '--delay': `${animationDelays[imgIndex] || 0}ms`,
                      } as React.CSSProperties
                    }
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
                      poster={poster}
                      src={img.content}
                      className={styles.video}
                      style={
                        {
                          '--delay': `${animationDelays[imgIndex] || 0}ms`,
                        } as React.CSSProperties
                      }
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}

        <div className={styles.nextFilter}>
          <p>
            {String(currentSlide).padStart(2, '0')} / {String(buttonData.length).padStart(2, '0')}
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
  );
};
