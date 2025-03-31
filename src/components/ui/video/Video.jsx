import React from 'react';
import styles from './styles.module.scss';
import { cn } from '@/lib/utils';

export const Video = ({ className, src }) => {
  return (
    <video
      className={cn(styles.video, className)}
      width="100%"
      autoPlay
      muted
      loop
      playsInline
      lazy-loading="true"
      preload="auto">
      <source src={src} type="video/mp4" />
      Ваш браузер не поддерживает видео тег.
    </video>
  );
};
