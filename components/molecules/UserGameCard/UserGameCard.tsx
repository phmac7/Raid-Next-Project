import Image from 'next/image'
import React from 'react'
import styles from './UserGameCard.module.scss'

export interface GameCardProps {
    gameName: string,
    gameImg:string,
    elo: string,
    eloImg: string,
    roleImg: string,
    role: string,
}

const UserGameCard: React.FC<GameCardProps> = ({gameName, gameImg, elo, eloImg, roleImg, role}) => {
  return (
    <div className={styles.card}>
        <div className={styles.card__heading}>
            <div className={styles.card__heading__img}>
                <Image src={gameImg} width={80} height={80}/>
            </div>
            <div className={styles.card__heading__text}>
                <p className={styles.card__heading__text__gameTitle}>
                    {gameName}
                </p>
                <div className={styles.card__heading__text__elo}>
                    <span className={styles.card__heading__text__eloText}>{elo}</span>
                    <Image src={eloImg} width={35} height={35}/>
                </div>
            </div>
        </div>
        <div className={styles.card__roles}>
            <span className={styles.card__roles__title}>
                Roles:
            </span>
            <div className={styles.card__roles__info}>
                <Image src={roleImg} width={20} height={20}/>
                <span>{role}</span>
            </div>
        </div>
    </div>
  )
}

export default UserGameCard