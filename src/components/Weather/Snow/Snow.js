import React from 'react'
import Snowfall from 'react-snowfall'
import styles from './Snow.module.scss';

const Snow = () => {
    return (
    <div className={styles.snow}>
        <Snowfall />
    </div>
    )
}

export default Snow;