import React from 'react';
import styles from './styles.module.scss';
import Header from '../header/Header';
import Preview from '../preview/Preview';
import Hero from '../hero/Hero';
import Concept from '../concept/Concept';
import Filter from '../filter/Filter';
import Collection from '../collection/Сollection';
import Video from '../video/Video';
import Backstage from '../backstage/Backstage';
import Shop from '../shop/Shop';
import Slider from '../slider/Slider';

export default function App() {
  return (
    <>
      <Header />
      <Preview />
      <Hero />
      <Concept />
      <Filter />
      <Collection />
      <Video />
      <Backstage />
      <Shop />
      <Slider />
    </>
  );
}
