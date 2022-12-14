import Image from 'next/image';
import React from 'react';
import styles from './UserGameCard.module.scss';
import { GameCardProps } from '@/models/components';

const UserGameCard: React.FC<GameCardProps> = ({ userGames }) => {
  if (!userGames[0].fields.icon?.fields.file.url) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.card}>
      <div className={styles.card__heading}>
        <div className={styles.card__heading__img}>
          <Image
            src={'https:' + userGames[0].fields.icon?.fields.file.url}
            width={80}
            height={80}
          />
        </div>
        <div className={styles.card__heading__text}>
          <p className={styles.card__heading__text__gameTitle}>
            {userGames[0].fields.icon.fields.title}
          </p>
          <div className={styles.card__heading__text__elo}>
            {/* <span className={styles.card__heading__text__eloText}>{elo}</span> */}
            {/* <Image src={eloImg} width={35} height={35} /> */}
          </div>
        </div>
      </div>
      <div className={styles.card__roles}>
        <span className={styles.card__roles__title}>Roles:</span>
        <div className={styles.card__roles__info}>
          {/* <Image src={roleImg} width={20} height={20} />
          <span>{role}</span> */}
        </div>
      </div>
    </div>
  );
};

export default UserGameCard;
