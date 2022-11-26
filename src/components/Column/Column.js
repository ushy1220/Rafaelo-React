import styles from "./Column.module.scss"

const Columns = props => {

    return(
    <div className={styles.row}>
        <article className={styles.column}>
            <h2 className={styles.title}>{props.title}</h2>
        </article>
    </div>
           
    );
};

export default Columns

//<span className={styles.icon + ' fa fa-' + props.icon}></span>