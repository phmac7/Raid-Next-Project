import React, { FC } from 'react';
import { createPortal } from 'react-dom';
import styles from './feedback.module.scss';
import { CheckCircle, WarningCircle, XCircle } from 'phosphor-react';
import { FeedbackProps } from '@/models/components';
import { Button } from '@/components/atoms';

const FeedBack: FC<FeedbackProps> = ({ status, title, message, onClose }) => {
  let icon = <CheckCircle size={48} />;

  if (status === 'error') {
    icon = <XCircle size={48} />;
  } else if (status === 'warning') {
    icon = <WarningCircle size={48} />;
  }

  const feedback = (
    <section className={`${styles.feedback} ${styles[`feedback--${status}`]}`}>
      <header className={styles['feedback__header']}>
        {icon}
        <h2 className={styles['feedback__title']}>{title}</h2>
      </header>
      <main className={styles['feedback__main']}>
        <p className={styles['feedback__message']}>{message}</p>
      </main>
      <footer className={styles['feedback__footer']}>
        <Button onClick={onClose} label="Ok" cssModule={`button--${status}`} />
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
