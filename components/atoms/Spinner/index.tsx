import React from 'react';
import { createPortal } from 'react-dom';
import styles from './spinner.module.scss';

const Spinner = () => {
  const spinner = (
    <div className={styles.spinner}>
      <div className={styles['spinner__icon']}></div>
    </div>
  );

  if (typeof window === 'object') {
    return createPortal(spinner, document.getElementById('overlays')!);
  }

  return spinner;
};

export default Spinner;
