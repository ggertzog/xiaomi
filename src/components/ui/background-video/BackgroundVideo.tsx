import React, { RefObject, VideoHTMLAttributes } from 'react';
import styles from './styles.module.scss';
import { cn } from '@/lib/utils';

interface VideoSource {
  src: string;
  type: string;
}

interface BackgroundVideoProps extends Omit<VideoHTMLAttributes<HTMLVideoElement>, 'src'> {
  className: string;
  src: VideoSource[] | string;
  ref?: RefObject<HTMLVideoElement | null>;
}

export const BackgroundVideo = ({ className, src, ...props }: BackgroundVideoProps) => {
  return (
    <video
      className={cn(styles.video, className)}
      width="100%"
      lazy-loading="true"
      preload="auto"
      {...props}>
      {Array.isArray(src) ? (
        src.map((item, index) => <source key={index} src={item.src} type={item.type} />)
      ) : (
        <source src={src} type="video/mp4" />
      )}
      Ваш браузер не поддерживает видео тег.
    </video>
  );
};
