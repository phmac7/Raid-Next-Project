import Link from 'next/link'
import React from 'react'
import styles from './UserGames.module.scss'

const UserGames:React.FC = () => {
  return (
    <div className={styles.userGames}>
        <div className={styles.userGames__heading}>
            <span className={styles.userGames__heading__title}>My Games</span>
            <Link href='#'>
                <a className={styles.userGames__heading__link} href='#'>Add new Game</a>
            </Link>
        </div>
        <div className={styles.userGames__games}>
            
        </div>
    </div>
  )
}

export default UserGames