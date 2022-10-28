import React from 'react';
import styles from './Button.module.scss';
import { ButtonType } from '@/models/components';

const Button: React.FC<ButtonType> = ({ label }) => {
  return <button className={styles.button}>{label}</button>;
};

export default Button;
