
import styles from "./Column.module.scss"

const Column = props => {

    return(
            <article className={styles.column}>
                <h3 className={styles.name}>{props.name}</h3><br />
                <h4 className={styles.email}>{props.email}</h4><br />
                <h5 className={styles.content}>{props.content}</h5>
            </article>
    );
};

export default Column;