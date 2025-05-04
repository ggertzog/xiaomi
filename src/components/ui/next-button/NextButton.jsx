import React from 'react';
import styles from './styles.module.scss';

export const NextButton = ({ title, children, ...props }) => {
  return (
    <button type="button" className={styles.nextButton} {...props}>
      {title}
      {children}
    </button>
  );
};
