import styles from './Footer.module.scss';

const Footer = () => {

    return(
        <div className={styles.container}>
            <footer className={styles.footer}>
                <p className={styles.author}>Stronę wyczarował Michał Bielecki</p><br></br>  
                
                <p className={styles.rights}>Wszelkie prawa zastrzeżone</p> 
            </footer>  
        </div>
    )
}

export default Footer;

//<p className={styles.update}>Ostatnia aktualizacja strony: 1.12.2022</p><br></br>  