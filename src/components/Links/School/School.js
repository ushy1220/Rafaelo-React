import styles from './School.module.scss';
import { motion } from 'framer-motion';
import {useState} from 'react';

const School = () => {

    const [rotate, setRotate] = useState(false);
    
    return(
        <motion.div 
            className={styles.schoolHat}
            animate={{ rotate: rotate ? 495 : 0}}
            onClick={() => {
                setRotate(!rotate);
            }}
            >
            <a href="#school" className={styles.school}>
                <h4 className={styles.redTitle}>BAL SZKOLNY</h4>
                <img
                    src='https://i.postimg.cc/PJBrfByR/cylinder-czerwony-1.png'
                    alt=""
                    className={styles.red}
                    title={styles.title}
                />
            </a>
        </motion.div>
    )
}

export default School;