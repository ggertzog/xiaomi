import React from 'react';
import styles from './styles.module.scss';
import { ButtonData } from '../../types/types';
import { TabButton } from '@/components/ui';

interface FilterControlsProps {
  currentSlide: number;
  handleClickTabButton: (index: number) => void;
  buttonData: ButtonData[];
}

export const FilterControls = ({
  currentSlide,
  handleClickTabButton,
  buttonData,
}: FilterControlsProps) => {
  return (
    <div className={styles.box}>
      <h3 className={styles.title}>
        фильтры&nbsp;<span>01/04</span>
      </h3>
      <div className={styles.buttonContainer}>
        {buttonData.map((item, index) => (
          <TabButton
            key={item.id}
            title={item.title}
            active={index === currentSlide - 1 ? 'activeButton' : ''}
            onClick={() => handleClickTabButton(index)}
          />
        ))}
      </div>
    </div>
  );
};
