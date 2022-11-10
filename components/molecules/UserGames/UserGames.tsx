import Link from 'next/link';
import React from 'react';
import UserGameCard from '../UserGameCard/UserGameCard';
import styles from './UserGames.module.scss';
import { GameCardProps } from '@/models/components';

const UserGames: React.FC<GameCardProps> = ({
  gameName,
  gameImg,
  elo,
  eloImg,
  role,
  roleImg,
}) => {
  return (
    <div className={styles.userGames}>
      <div className={styles.userGames__heading}>
        <span className={styles.userGames__heading__title}>My Games</span>
        <Link href="#">
          <a className={styles.userGames__heading__link} href="#">
            Add new Game
          </a>
        </Link>
      </div>
      <div className={styles.userGames__games}>
        <UserGameCard
          gameImg={gameImg}
          gameName={gameName}
          elo={elo}
          eloImg={eloImg}
          roleImg={roleImg}
          role={role}
        />
      </div>
    </div>
  );
};

export default UserGames;
