import React, { FC } from 'react';

import styles from './fileInput.module.scss';
import { FileInputType } from '@/models/components';

const FileInput: FC<FileInputType> = ({ icon, text, onChange }) => {
  return (
    <div className={styles.fileInput}>
      {icon}
      <label className={styles['fileInput__label']} htmlFor="file">
        {text}
      </label>
      <input
        id="file"
        className={styles['fileInput__field']}
        type="file"
        onChange={onChange}
      />
    </div>
  );
};

export default FileInput;
