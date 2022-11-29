import styles from "./Column.module.scss"

const Column = props => {

    return(
    <div className={styles.row}>
            <button className={styles.yellow}>Urodziny</button>
            <button className={styles.green}>Plener</button>
            <button className={styles.blue}>Rodzinne</button>
            <button className={styles.red}>Bal szkolny</button>   
    </div>
           
    );
};

export default Column;

