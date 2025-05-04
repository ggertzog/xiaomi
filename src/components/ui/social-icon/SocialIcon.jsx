import React from 'react';
import styles from './styles.module.scss';

export const SocialIcon = ({ src, alt, href, ...props }) => {
  return (
    <li className={styles.link} href={href} {...props}>
      <img className={styles.img} src={src} alt={alt} />
    </li>
  );
};
