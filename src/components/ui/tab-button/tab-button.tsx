import React, { ButtonHTMLAttributes } from 'react';
import styles from './styles.module.scss';
import { cn } from '@/lib/utils.js';

interface TabButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  active?: string;
}

export const TabButton = ({ title, active, ...props }: TabButtonProps) => {
  return (
    <button type="button" className={cn(styles.button, active && styles.buttonActive)} {...props}>
      {title}
      <div className={cn(styles.underline, active && styles.underlineActive)}></div>
    </button>
  );
};
