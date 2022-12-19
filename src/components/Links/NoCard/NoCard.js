import styles from './NoCard.module.scss';

const NoCard = () => {

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1>Wybierz kapelusz</h1>
                <button>JPG</button>
            </div>
        </section>
    )
}

export default NoCard;