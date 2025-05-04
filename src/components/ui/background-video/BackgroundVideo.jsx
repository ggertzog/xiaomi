import React from 'react';
import styles from './styles.module.scss';
import { cn } from '@/lib/utils';

export const BackgroundVideo = ({ className, src, ...props }) => {
  return (
    <video
      className={cn(styles.video, className)}
      width="100%"
      lazy-loading="true"
      preload="auto"
      {...props}>
      <source src={src} type="video/mp4" />
      Ваш браузер не поддерживает видео тег.
    </video>
  );
};
