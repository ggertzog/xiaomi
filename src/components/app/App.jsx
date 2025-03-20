import React from 'react';
import styles from './styles.module.scss';
import Header from '../header/Header';
import Preview from '../preview/Preview';
import Hero from '../hero/Hero';
import Concept from '../concept/Concept';

export default function App () {
  return (
    <>
      <Header />
      <Preview />
      <Hero />
      <Concept />
    </>
  );
};
