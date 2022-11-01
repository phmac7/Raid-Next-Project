import React from 'react';
import styles from './TextArea.module.scss';
import { TextAreaType } from '@/models/components';

const TextArea: React.FC<TextAreaType> = ({ id, rows, cols, placeholder }) => {
  return (
    <div className={styles.textArea}>
      <textarea
        className={styles['textArea__input']}
        id={id}
        rows={rows}
        cols={cols}
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};

export default TextArea;
