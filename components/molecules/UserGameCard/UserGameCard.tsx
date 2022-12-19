import Image from "next/image";
import React from "react";
import styles from "./UserGameCard.module.scss";
import { GameCardProps } from "@/models/components";

const UserGameCard: React.FC<GameCardProps> = ({ userGames }) => {
  console.log(userGames);
  return (
    <div className={styles.card}>
      <div className={styles.card__heading}>
        <div className={styles.card__heading__img}>
          <Image
            alt={`${userGames.fields.game.fields.name}'s logo`}
            src={"https://" + userGames.fields.game.fields.icon.fields.file.url}
            width={80}
            height={80}
          />
        </div>
        <div className={styles.card__heading__text}>
          <p className={styles.card__heading__text__gameTitle}>
            {userGames.fields.game.fields.name}
          </p>
          <div className={styles.card__heading__text__elo}>
            <span className={styles.card__heading__text__eloText}>
              {userGames.fields.elo.fields.name}
            </span>
            {userGames.fields.elo.fields.icon.fields.file.url && (
              <Image
                alt=""
                src={
                  "https://" + userGames.fields.elo.fields.icon.fields.file.url
                }
                width={25}
                height={25}
              />
            )}
          </div>
        </div>
      </div>
      <div className={styles.card__roles}>
        <span className={styles.card__roles__title}>Roles:</span>
        <div className={styles.card__roles__info}>
          {userGames.fields.role[0].fields.icon && (
            <Image
              alt="Image of user Role"
              src={
                "https://" + userGames.fields.role[0].fields.icon.fields.file.url
              }
              width={20}
              height={20}
            />
          )}
          <span>{userGames.fields.role[0].fields.name}</span>
        </div>
      </div>
    </div>
  );
};

export default UserGameCard;
