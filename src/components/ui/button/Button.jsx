import React from 'react';
import styles from './styles.module.scss';

export const Button = ({title, ...props}) => {
  return (
    <button className={styles.button} {...props}>{title}</button>
  )
}
