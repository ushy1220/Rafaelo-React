import styles from './Nav.module.scss';

const Nav = () => {

    return (
        <main className={styles.main}>
            <a href="/login" className={styles.mess}>MESS</a>
            <a href="/home" className={styles.home}>HOME</a>
            <a href="/about" className={styles.about}>O NAS</a>
            <a href='#contact' className={styles.contact}>KONTAKT</a>
        </main>
    
    )
}

export default Nav;
/*
import styles from './Nav.module.scss';
import { SCREEN_NAMES } from '../../App';

const Nav = ({selectScreen}) => {
    return (
        <main className={styles.main}>
            <a  href="/mess" 
                className={styles.mess} 
                onClick={(e) => {
                    e.preventDefault();
                    selectScreen(SCREEN_NAMES.MESS)
                }}>MESS</a>

            <a  href="/home" 
                className={styles.home} 
                onClick={(e) => {
                    e.preventDefault();
                    selectScreen(SCREEN_NAMES.HOME)
                }}>HOME</a>

            <a  href="/about" 
                className={styles.about} 
                onClick={(e) => {
                    e.preventDefault();
                    selectScreen(SCREEN_NAMES.ABOUT)
                }}>O NAS</a>
        </main>
    
    )
}

export default Nav;
*/