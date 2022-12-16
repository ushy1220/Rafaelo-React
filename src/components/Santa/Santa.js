import styles from './Santa.module.scss';

const Santa = () => {
    return(
        <div className={styles.santa}>
            <a href="tel:+48506772862">
                <img
                    src='https://i.postimg.cc/C5f4Df7F/Przycisk-bezpiecze-stwa.png'
                    alt=""
                    className={styles.img}
                    title={styles.santa}
                />
            </a>
        </div>
        
    )
}

export default Santa;