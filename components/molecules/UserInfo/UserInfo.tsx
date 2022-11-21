import { BasicInfo } from '@/components/atoms';
import { UserGeneralInfoProps } from '@/models/components';
import Image from 'next/image';
import React from 'react';
import styles from './UserInfo.module.scss';

const UserInfo: React.FC<UserGeneralInfoProps> = ({ user }) => {
  if (!user) {
    return (
      <div>
        <Image src={'/assets/loading.gif'} width={500} height={500} />
      </div>
    );
  }
  return (
    <div className={styles.userInfo}>
      <p className={styles.userInfo__title}>Basic Info</p>
      <div className={styles.userInfo__details}>
        <BasicInfo property={'Email'} value={user.fields.email} />
        <BasicInfo property={'Discord ID'} value={user.fields.discord} />
      </div>
    </div>
  );
};

export default UserInfo;
