import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  label: string;
  color?: string;
}

const Button: React.FC<ButtonProps> = ({ label, color }) => {
  return <button className={styles.button}>{label}</button>;
};

export default Button;
