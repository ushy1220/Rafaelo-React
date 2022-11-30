
import styles from './SocialMedia.module.scss';

const SocialMedia = props => {
    return(
        <div className={styles.SocialMedia}>
            <a href="506 772 862"><i className="fa-solid fa-phone" id={styles.phone}></i></a>
            <a href="https://www.facebook.com/RafaeloAnimacja/"><i className="fa-brands fa-facebook" id={styles.facebook}></i></a>
            <a href="https://www.instagram.com/siemka_elo_rafaelo/"><i className="fa-brands fa-instagram" id={styles.instagram}></i></a>
            <a href="https://www.tiktok.com/@siemka_elo_rafaelo"><i className="fa-brands fa-tiktok" id={styles.tiktok}></i></a>
        </div>
    )
}

export default SocialMedia;

/* 
klasy:


*/