import React, { useRef, RefObject } from 'react';
// import styles from './styles.module.scss';
import Header from '../shared/header/Header';
import Preview from '../shared/preview/Preview';
import Hero from '../shared/hero/Hero';
import Concept from '../shared/concept/Concept';
import Collection from '../shared/collection/Сollection';
import VideoSection from '../shared/video-section/VideoSection';
import Backstage from '../shared/backstage/Backstage';
import Shop from '../shared/shop/Shop';
import FilterSlider from '../shared/filter-slider/FilterSlider';
import Vertcial from '../shared/vertical/Vertcial';
import Contest from '../shared/contest/Contest';

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
