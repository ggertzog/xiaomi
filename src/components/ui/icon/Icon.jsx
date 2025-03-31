import React from 'react';
import styles from './styles.module.scss';

export const Icon = ({ src, alt, ...props }) => {
  return (
    <a className={styles.link} href="#" {...props}>
      <img className={styles.img} src={src} alt={alt} />
    </a>
  );
};
