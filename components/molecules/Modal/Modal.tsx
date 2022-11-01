import React from 'react';
import styles from './Modal.module.scss';
import { ModalType } from '@/models/components';

const Modal: React.FC<ModalType> = ({ header, main, footer }) => {
  const ModalHeader = header;
  const ModalMain = main;
  const ModalFooter = footer;

  return (
    <dialog className={styles.modal}>
      <header className={styles['modal__header']}>
        <ModalHeader />
      </header>
      <main className={styles['modal__main']}>
        <ModalMain />
      </main>
      <footer className={styles['modal__footer']}>
        <ModalFooter />
      </footer>
    </dialog>
  );
};

export default Modal;
