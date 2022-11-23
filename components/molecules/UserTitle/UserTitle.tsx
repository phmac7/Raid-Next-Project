import React from 'react';
import Image from 'next/image';
import styles from './UserTitle.module.scss';
import { UserGeneralInfoProps } from '@/models/components';

const UserTitle: React.FC<UserGeneralInfoProps> = ({
  user,
  shownComponent,
  setShownComponent,
}) => {
  return (
    <div className={styles.user__container}>
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
      <div className={styles.user__filter}>
        <button
          onClick={(e) => setShownComponent('feed')}
          className={`${styles.user__filterFeed} ${
            shownComponent === 'feed' ? styles.active : ''
          }`}
        >
          Feed
        </button>
        <button
          onClick={(e) => setShownComponent('info')}
          className={`${styles.user__filterInfo} ${
            shownComponent === 'info' ? styles.active : ''
          }`}
        >
          Info
        </button>
        <button
          onClick={(e) => setShownComponent('games')}
          className={`${styles.user__filterGames} ${
            shownComponent === 'games' ? styles.active : ''
          }`}
        >
          Games
        </button>
      </div>
    </div>
  );
};

export default UserTitle;
