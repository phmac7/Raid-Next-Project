import Image from 'next/image';
import React from 'react';
import styles from './avatar.module.scss';

import { AvatarType } from '@/models/components';

const Avatar: React.FC<AvatarType> = ({ avatar, alt }) => {
  return (
    <Image
      className={styles.avatar}
      src={avatar}
      alt={alt}
      height={50}
      width={50}
    />
  );
};

export default Avatar;
