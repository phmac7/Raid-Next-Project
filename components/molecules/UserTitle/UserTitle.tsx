import React from 'react';
import Image from 'next/image';
import styles from './UserTitle.module.scss';
import { UserGeneralInfoProps } from '@/models/components';

const UserTitle: React.FC<UserGeneralInfoProps> = ({ user }) => {
  return (
    <figure className={styles.user}>
      <div className={styles.user__photo}>
        <Image
          src={'https:/' + user.fields.profilePicture.fields.file.url}
          width={100}
          height={100}
        />
      </div>
      <figcaption className={styles.user__description}>
        <span className={styles.user__description__name}>
          {user.fields.name}
        </span>
        <span className={styles.user__description__discordId}>
          {user.fields.discord}
        </span>
      </figcaption>
    </figure>
  );
};

export default UserTitle;
