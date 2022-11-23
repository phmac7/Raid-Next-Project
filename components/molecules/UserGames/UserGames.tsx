import Link from 'next/link';
import React from 'react';
import UserGameCard from '../UserGameCard/UserGameCard';
import styles from './UserGames.module.scss';
import { GameCardProps } from '@/models/components';

const UserGames: React.FC<GameCardProps> = ({ userGames }) => {
  const gameValorant = userGames.filter(
    (item) => item.fields.name === 'Valorant'
  );
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
        <UserGameCard userGames={gameValorant} />
      </div>
    </div>
  );
};

export default UserGames;
