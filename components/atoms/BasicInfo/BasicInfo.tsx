import React from 'react'
import styles from './BasicInfo.module.scss'

interface BasicInfo {
    property: string,
    value: string
}

const BasicInfo: React.FC<BasicInfo> = ({ property, value }) => {
    return (
        <p className={styles.info}>
            <span className={styles.info__property}>{property}:</span>
            <span className={styles.info__value}>{value}</span>
        </p>
    )
}

export default BasicInfo