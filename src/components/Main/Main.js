import style from './Main.module.scss'

const Main = () => {
    return(
        <div className={style.container}>
           <form className={style.form}>
            <h4 className={style.title}>Imię i nazwisko</h4>
            <input></input>
            <h4 className={style.title}>e-mail</h4>
            <input></input>
            <h4 className={style.title}>Treść wiadomości</h4>
            <textarea></textarea>
        </form> 
        </div>
        
    )
}

export default Main;