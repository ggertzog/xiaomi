import React from 'react';
import styles from './styles.module.scss';
import logo from '@/assets/logo.png';
import brand from '@/assets/xiaomi.png';

export default function Header({ coloborationRef, heroRef, shopRef, scrollToSection }) {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <button
          type="button"
          className={styles.link}
          onClick={() => scrollToSection(coloborationRef)}>
          КОЛЛАБОРАЦИЯ
        </button>
        <button type="button" className={styles.link} onClick={() => scrollToSection(heroRef)}>
          Серия Mi&nbsp;10T
        </button>
        <button type="button" className={styles.link} onClick={() => scrollToSection(shopRef)}>
          ГДЕ КУПИТЬ
        </button>
      </nav>
      <div className={styles.logo}>
        <img className={styles.icon} src={logo} alt="logo" />
        <img className={styles.brand} src={brand} alt="brand" />
      </div>
    </header>
  );
}
