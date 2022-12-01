import styles from './Links.module.scss';

const Links = () => {
    return (
        <div className={styles.container}>
            <a href="#birthday"><i className="fa-sharp fa-solid fa-gift" id={styles.birthday}></i></a>
            <a href="#family"><i className="fa-solid fa-cake-candles" id={styles.family}></i></a>
            <a href="#plener"><i className="fa-solid fa-wind" id={styles.plener}></i></a>
            <a href="#school"><i className="fa-solid fa-graduation-cap" id={styles.school}></i></a>
        </div>
    )
}

export default Links;
