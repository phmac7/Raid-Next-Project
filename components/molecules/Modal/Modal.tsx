import React from 'react';
import styles from './Modal.module.scss';
import { ModalType } from '@/models/components';

const Modal: React.FC<ModalType> = React.forwardRef(
  ({ header, main, footer }, ref) => {
    return (
      <dialog ref={ref} className={styles.modal}>
        <header className={styles['modal__header']}>{header}</header>
        <main className={styles['modal__main']}>{main}</main>
        <footer className={styles['modal__footer']}>{footer}</footer>
      </dialog>
    );
  }
);

export default Modal;
