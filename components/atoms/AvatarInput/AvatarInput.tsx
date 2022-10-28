import Image from 'next/image';
import React from 'react';
import styles from './AvatarInput.module.scss';

export interface AvatarInputProps {
  id: string;
  placeholder: string;
  avatar: string;
}

const AvatarInput: React.FC<AvatarInputProps> = ({
  id,
  placeholder,
  avatar,
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
      <label className={styles['avatarInput__label']} htmlFor={id}></label>
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
