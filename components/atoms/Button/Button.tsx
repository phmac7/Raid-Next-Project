import React from 'react';
import styles from './Button.module.scss';
import { ButtonType } from '@/models/components';

const Button: React.FC<ButtonType> = ({ label, cssModule }) => {
  return (
    <button className={`${styles.button} ${cssModule && styles[cssModule]}`}>
      {label}
    </button>
  );
};

export default Button;
