import { useState } from 'react';
import styles from './Content.module.scss';

const Content = () => {

    const [isActive, setIsActive] = useState(false);

    return (
        <div className={styles.container}>
            <div className={styles.default}>
                <h1>Wybierz kapelusz</h1>
                <button>JPG</button>
            </div>
            <div className={styles.birthday}>
            </div>
            <div className={styles.plener}>
            </div>
            <div className={styles.family}>
            </div>
            <div className={styles.school}>
            </div>
        </div>
        
    )
}

export default Content;