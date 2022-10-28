import Image from 'next/image';
import React from 'react';
import styles from './AvatarInput.module.scss';

import { AvatarInputType } from '@/models/components';

const AvatarInput: React.FC<AvatarInputType> = ({
  id,
  placeholder,
  avatar,
  label,
}) => {
  return (
    <div className={styles.avatarInput}>
      <Image
        className={styles['avatarInput__avatar']}
        src={avatar}
        alt=""
        height={50}
        width={50}
      />
      <label className={styles['avatarInput__label']} htmlFor={id}>
        {label}
      </label>
      <input
        className={styles['avatarInput__field']}
        id={id}
        placeholder={placeholder}
        type="text"
      />
    </div>
  );
};

export default AvatarInput;
