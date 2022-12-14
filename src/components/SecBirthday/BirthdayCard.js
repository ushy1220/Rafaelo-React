import styles from './BirthdayCard.module.scss';

const BirthdayCard = () => {
    return (
        <div className={styles.container} id="birthday">
            <div className={styles.Card}>
            <img
                    src=''
                    alt=""
                    className={styles.yellow}
                    title={styles.title}
                />
            </div>
            <div className={styles.description}>

            </div>
        </div>   
    )
    
}

export default BirthdayCard;