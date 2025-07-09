import React, { useRef, RefObject } from 'react';
// import styles from './styles.module.scss';
import Preview from '@/components/shared/preview/preview';
import Hero from '@/components/shared/hero/hero';
import Concept from '@/components/shared/concept/concept';
import Collection from '@/components/shared/collection/collection';
import VideoSection from '@/components/shared/video-section/video-section';
import Backstage from '@/components/shared/backstage/backstage';
import Shop from '@/components/shared/shop/shop';
import FilterSlider from '@/components/shared/filter-slider/filter-slider';
import Vertcial from '@/components/shared/vertical/vertcial';
import Contest from '@/components/shared/contest/contest';
import Header from '@/components/shared/header/header';

export default function App() {
  const coloborationRef = useRef<HTMLElement | null>(null);
  const heroRef = useRef<HTMLElement | null>(null);
  const shopRef = useRef<HTMLElement | null>(null);

  const scrollToSection = (ref: RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Vertcial />
      <Header
        coloborationRef={coloborationRef}
        heroRef={heroRef}
        shopRef={shopRef}
        scrollToSection={scrollToSection}
      />
      <Preview coloborationRef={coloborationRef} />
      <Hero heroRef={heroRef} />
      <Concept />
      <FilterSlider />
      <Contest />
      <Collection />
      <VideoSection />
      <Backstage />
      <Shop shopRef={shopRef} />
    </>
  );
}
