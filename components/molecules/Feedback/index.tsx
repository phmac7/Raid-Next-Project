import React, { FC } from 'react';
import { createPortal } from 'react-dom';
import styles from './feedback.module.scss';
import { CheckCircle, WarningCircle, XCircle } from 'phosphor-react';
import { FeedbackProps } from '@/models/components';
import { Button } from '@/components/atoms';

const FeedBack: FC<FeedbackProps> = ({ status, title, message }) => {
  const feedback = (
    <section className={`${styles.feedback} ${styles[`feedback--${status}`]}`}>
      <header className={styles['feedback__header']}>
        <CheckCircle size={48} />
        <h2 className={styles['feedback__title']}>{title}</h2>
      </header>
      <main className={styles['feedback__main']}>
        <p className={styles['feedback__message']}>{message}</p>
      </main>
      <footer className={styles['feedback__footer']}>
        <Button label="Ok" cssModule={`button--${status}`} />
      </footer>
      <div className={styles['feedback__countdown']}></div>
    </section>
  );

  if (typeof window === 'object') {
    return createPortal(feedback, document.getElementById('overlays')!);
  }

  return feedback;
};

export default FeedBack;
