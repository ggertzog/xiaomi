import React from 'react';
import styles from './styles.module.scss';
import { cn } from '@/lib/utils.js';

export const Button = ({ title, ...props }) => {
  return (
    <button className={cn(styles.button, props.active && styles.buttonActive)} {...props}>
      {title}
      <div className={cn(styles.underline, props.active && styles.underlineActive)}></div>
    </button>
  );
};
