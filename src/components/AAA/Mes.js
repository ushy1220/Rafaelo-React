import styles from './MesBut.module.scss';

const MesBut = () => {
    return (
        <main className={styles.main}>
            <a href="/mess" className={styles.mess}>MESS</a>
            <a href="/home" className={styles.home}>HOME</a>
        </main>
    
    )
}

export default MesBut;