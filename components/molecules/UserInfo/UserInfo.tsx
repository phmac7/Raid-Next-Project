import { BasicInfo } from '@/components/atoms'
import React from 'react'
import styles from './UserInfo.module.scss'

const UserInfo: React.FC = () => {
    return (
        <div className={styles.userInfo}>
            <p className={styles.userInfo__title}>Basic Info</p>
            <div className={styles.userInfo__details}>
            <BasicInfo property={'Email'} value={'email.email@email.com'} />
            <BasicInfo property={'date of bith'} value={'99/99/9999'} />

            </div>
        </div>
    )
}

export default UserInfo