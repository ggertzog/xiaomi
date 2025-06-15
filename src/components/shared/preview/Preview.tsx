import React, { RefObject } from 'react';
import styles from './styles.module.scss';
import previewTitle from '@/assets/preview-title.png';
import previewTitleMobile from '@/assets/preview-title-mobile.png';
import natureVideoMP4 from '@/assets/video/nature.mp4';
import natureVideoWEBM from '@/assets/video/nature.webm';
import { BackgroundVideo } from '../../ui';
import poster from '@/assets/preview-image.png';

interface PreviewProps {
  coloborationRef: RefObject<HTMLElement | null>;
}

export default function Preview({ coloborationRef }: PreviewProps) {
  const videoSources = [
    { src: natureVideoWEBM, type: 'video/webm' },
    { src: natureVideoMP4, type: 'video/mp4' },
  ];

  return (
    <section ref={coloborationRef} className={styles.preview}>
      <div className={styles.container}>
        <img className={styles.logo} src={previewTitle} alt="xiaomi" />
        <img className={styles.logoMobile} src={previewTitleMobile} alt="xiaomi" />
        <p className={styles.text}>
          Капсульная коллекция, вдохновленная M<span>i</span>&nbsp;10T series
        </p>
      </div>

      <div className={styles.background}>
        <BackgroundVideo
          src={videoSources}
          className={styles.video}
          poster={poster}
          loop
          playsInline
          autoPlay
          muted
        />
      </div>
    </section>
  );
}
