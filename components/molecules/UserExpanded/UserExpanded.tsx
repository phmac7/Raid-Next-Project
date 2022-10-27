import React from 'react'
import Image from 'next/image'
import styles from './UserExpanded.module.scss'

interface UserExapndedProps {
    picture: string,
    userName: string,
    discordId: string,
}

const UserExpanded: React.FC<UserExapndedProps> = ({ picture, userName, discordId }) => {
    return (
        <figure className={styles.user}>
            <div className={styles.user__photo}>
                <Image src={picture} width={100} height={100} />
            </div>
            <figcaption className={styles.user__description}>
                <span className={styles.user__description__name}>{userName}</span>
                <span className={styles.user__description__discordId}>{discordId}</span>
            </figcaption>
        </figure>
    )
}

export default UserExpanded