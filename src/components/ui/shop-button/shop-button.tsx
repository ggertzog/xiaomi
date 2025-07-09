import React, { ButtonHTMLAttributes } from 'react';
import styles from './styles.module.scss';

interface ShopButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const ShopButton = ({ children, ...props }: ShopButtonProps) => {
  return (
    <button type="button" className={styles.button} {...props}>
      {children}
    </button>
  );
};
