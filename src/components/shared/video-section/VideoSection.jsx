import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
import forestVideo from '@/assets/video/mixkit-waterfall-in-forest-2213-full-hd.mp4';
import { BackgroundVideo } from '../../ui';
import playImg from '@/assets/play.png';
import pauseImg from '@/assets/pause.png';
import fullscreenImg from '@/assets/fullscreen.png';
import { cn } from '@/lib/utils.js';

export default function VideoSection() {
  const backgroundVideo = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Обработчики событий видео и полноэкранного режима
  useEffect(() => {
    const video = backgroundVideo.current;
    if (!video) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement === video);
    };

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  function togglePlayPause() {
    const video = backgroundVideo.current;
    if (!video) return;

    if (video.paused) {
      video.play().catch((error) => console.error('Ошибка воспроизведения:', error));
    } else {
      video.pause();
    }
  }

  async function toggleFullScreen() {
    const video = backgroundVideo.current;
    if (!video) return;

    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      } else {
        await video.requestFullscreen();
      }
    } catch (error) {
      console.error('Ошибка полноэкранного режима:', error);
    }
  }

  return (
    <section className={styles.videoContainer}>
      <BackgroundVideo
        ref={backgroundVideo}
        src={forestVideo}
        className={styles.video}
        loop
        playsInline
      />
      <button
        className={cn(styles.button, styles.controllButton)}
        type="button"
        onClick={togglePlayPause}>
        <img src={isPlaying ? pauseImg : playImg} alt="play" className={styles.image} />
      </button>
      <button
        className={cn(styles.button, styles.fullscreenButton)}
        type="button"
        onClick={toggleFullScreen}>
        <img className={styles.image} src={fullscreenImg} alt="fullscreen" />
      </button>
    </section>
  );
}
