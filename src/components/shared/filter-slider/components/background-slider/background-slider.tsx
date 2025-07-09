import React from 'react';
import styles from './styles.module.scss';
import { BackgroundWord } from '../../types/types';
import { cn } from '@/lib/utils';

interface BackgroundSlider {
  currentSlide: number;
  backgroundWords: BackgroundWord[];
  blink: boolean;
}

export const BackgroundSlider = ({ currentSlide, backgroundWords, blink }: BackgroundSlider) => {
  return (
    <div className={styles.backgroundSlider}>
      {backgroundWords.map((item, wordIndex) => (
        <p
          key={wordIndex}
          className={cn(
            styles.customText,
            wordIndex === currentSlide - 1 && styles.customTextActive,
          )}>
          {item.word?.split('').map((letter, letterIndex) => (
            <span
              key={`${wordIndex}-${letterIndex}`}
              style={
                {
                  '--char-index': letterIndex,
                  '--random-delay': Math.random(),
                } as React.CSSProperties
              }
              className={cn(blink && styles.blinking)}>
              {letter}
            </span>
          ))}
        </p>
      ))}
    </div>
  );
};
