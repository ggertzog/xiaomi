import React from 'react';
import styles from './styles.module.scss';

interface SocialIconProps {
  src: string;
  alt: string;
  href: string;
}

export const SocialIcon = ({ src, alt, href, ...props }: SocialIconProps) => {
  return (
    <li className={styles.listItem} {...props}>
      <a className={styles.link} href={href}>
        <img className={styles.img} src={src} alt={alt} />
      </a>
    </li>
  );
};
