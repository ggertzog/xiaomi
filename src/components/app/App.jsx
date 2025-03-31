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

export default function App() {
  return (
    <>
      <Header />
      <Preview />
      <Hero />
      <Concept />
      <FilterSlider />
      <Collection />
      <VideoSection />
      <Backstage />
      <Shop />
    </>
  );
}
