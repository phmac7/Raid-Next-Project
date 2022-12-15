import Link from "next/link";
import React from "react";
import UserGameCard from "../UserGameCard/UserGameCard";
import styles from "./UserGames.module.scss";
import { GameCardProps } from "@/models/components";
import { Game } from "@/models/responseTypes";

const UserGames: React.FC<GameCardProps> = ({ userGames }) => {
  console.log(userGames);

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
        {userGames.map((el: any, i) => (
          <UserGameCard key={i} userGames={el} />
        ))}
      </div>
    </div>
  );
};

export default UserGames;
