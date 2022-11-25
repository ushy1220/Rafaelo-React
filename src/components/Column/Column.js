import styles from "./Column.module.scss"

const Column = props => {
    return(
    <div className={styles.row}>
        <article className={styles.column}>
                <h2 className={styles.title}>{props.title}</h2>
            </article>
    </div>
           
    );
};

export default Column;

//<span className={styles.icon + ' fa fa-' + props.icon}></span>