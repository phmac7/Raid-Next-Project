import React from 'react';
import styles from './modal.module.scss';
import { createPortal } from 'react-dom';
import { ModalType } from '@/models/components';
import { X } from 'phosphor-react';

const Modal: React.FC<ModalType> = React.forwardRef(
  ({ onCloseModal, header, main, footer }, ref) => {
    const modal = (
      <dialog ref={ref} className={styles.modal}>
        <header className={styles['modal__header']}>
          <div className={styles['modal__control']}>
            <h2 className={styles['modal__title']}>Create Post</h2>
            <button onClick={onCloseModal} className={styles['modal__close']}>
              <X size={20} />
            </button>
          </div>
          {header}
        </header>
        <main className={styles['modal__main']}>{main}</main>
        <footer className={styles['modal__footer']}>{footer}</footer>
      </dialog>
    );

    if (typeof window === 'object') {
      return createPortal(modal, document.getElementById('overlays')!);
    }

    return modal;
  }
);

export default Modal;
