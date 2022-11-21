import React from 'react';
import styles from './feedback.module.scss';
import { CheckCircle } from 'phosphor-react';

import { Button } from '@/components/atoms';

const FeedBack = () => {
  return (
    <section className={styles.feedback}>
      <header className={styles['feedback__header']}>
        <CheckCircle size={48} />
        <h2 className={styles['feedback__title']}>Sucess</h2>
      </header>
      <main className={styles['feedback__main']}>
        <p className={styles['feedback__message']}>test test test test</p>
      </main>
      <footer className={styles['feedback__footer']}>
        <Button label="Ok" />
      </footer>
      <div className={styles['feedback__countdown']}></div>
    </section>
  );
};

export default FeedBack;
