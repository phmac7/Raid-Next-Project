import React from 'react';
import styles from './textArea.module.scss';
import { TextAreaType } from '@/models/components';

const TextArea: React.FC<TextAreaType> = ({
  id,
  rows,
  cols,
  placeholder,
  onChange,
}) => {
  return (
    <div className={styles.textArea}>
      <textarea
        className={styles['textArea__input']}
        id={id}
        rows={rows}
        cols={cols}
        placeholder={placeholder}
        onChange={onChange}
      ></textarea>
    </div>
  );
};

export default TextArea;
