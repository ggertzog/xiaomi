import React from 'react';
import styles from './styles.module.scss';
import forestVideo from '@/assets/video/mixkit-waterfall-in-forest-2213-full-hd.mp4';
import { Video } from '../../ui';

export default function VideoSection() {
  return (
    <section className={styles.videoContainer}>
      <Video src={forestVideo} className={styles.video} />
    </section>
  );
}
