import React, { ButtonHTMLAttributes } from 'react';
import styles from './styles.module.scss';

interface NextButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  children?: React.ReactNode;
}

export const NextButton = ({ title, children, ...props }: NextButtonProps) => {
  return (
    <button type="button" className={styles.nextButton} {...props}>
      {title}
      {children}
    </button>
  );
};
