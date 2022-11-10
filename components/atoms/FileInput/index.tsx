import React, { FC } from 'react';
import { Camera } from 'phosphor-react';
import styles from './fileInput.module.scss';

const FileInput: FC = () => {
  return (
    <div className={styles.fileInput}>
      <Camera size={28} />
      <label className={styles['fileInput__label']} htmlFor="file">
        Photo
      </label>
      <input id="file" className={styles['fileInput__field']} type="file" />
    </div>
  );
};

export default FileInput;
