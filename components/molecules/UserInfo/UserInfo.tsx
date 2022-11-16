import { BasicInfo } from '@/components/atoms';
import { User } from '@/models/contentfulObjects';
import Image from 'next/image';
import React from 'react';
import styles from './UserInfo.module.scss';

interface UserInfoProps {
  user: User;
}

const UserInfo: React.FC<UserInfoProps> = ({ user }) => {
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
        <BasicInfo property={'Email'} value={user.fields.email['en-US']} />
        <BasicInfo
          property={'Discord ID'}
          value={user.fields.discord['en-US']}
        />
      </div>
    </div>
  );
};

export default UserInfo;
