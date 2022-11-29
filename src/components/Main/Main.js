import styles from './Main.module.scss'

const Main = () => {
    return(
        <div className={styles.container}>
           <form className={styles.form}>
            <h4 className={styles.title}>Imię i nazwisko</h4>
            <input placeholder='Jan'></input>
            <h4 className={styles.title}>e-mail</h4>
            <input placeholder='Kowalski'></input>
            <h4 className={styles.title}>Treść wiadomości</h4>
            <textarea placeholder='exampleEmail@site.com'></textarea>
            <button className={styles.button}>Wyślij</button>
        </form> 
        </div>
        
    )
}

export default Main;