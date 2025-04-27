import React from 'react';
import styles from './styles.module.scss';
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

export default function App() {
  return (
    <>
      <Vertcial />
      <Header />
      <Preview />
      <Hero />
      <Concept />
      <FilterSlider />
      <div className={styles.contest}></div>
      <Collection />
      <VideoSection />
      <Backstage />
      <Shop />
    </>
  );
}
