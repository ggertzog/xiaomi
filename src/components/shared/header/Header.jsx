import React from 'react';
import styles from './styles.module.scss';
import logo from '@/assets/logo.png';
import brand from '@/assets/xiaomi.png';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a className={styles.link} href="#">
          КОЛЛАБОРАЦИЯ
        </a>
        <a className={styles.link} href="#">
          Серия Mi&nbsp;10T
        </a>
        <a className={styles.link} href="#">
          ГДЕ КУПИТЬ
        </a>
      </nav>
      <div className={styles.logo}>
        <img className={styles.icon} src={logo} alt="" />
        <img className={styles.brand} src={brand} alt="" />
      </div>
    </header>
  );
}
