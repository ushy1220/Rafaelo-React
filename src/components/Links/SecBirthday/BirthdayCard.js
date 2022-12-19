import styles from './BirthdayCard.module.scss';

const BirthdayCard = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1>Wybierz kapelusz</h1>
                <button>JPG</button>
            </div>
        </section>  
    )
    
}

export default BirthdayCard;