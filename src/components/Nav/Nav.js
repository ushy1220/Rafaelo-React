import styles from './Nav.module.scss';

const Nav = () => {
    return (
        <main className={styles.main}>
            <a href="/mess" className={styles.mess}>MESS</a>
            <a href="/home" className={styles.home}>HOME</a>
            <a href="/about" className={styles.about}>O NAS</a>
        </main>
    
    )
}

export default Nav;