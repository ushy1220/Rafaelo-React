import styles from './Family.module.scss';
import { motion } from 'framer-motion';
import {useState} from 'react';

const Family = () => {

    const [rotate, setRotate] = useState(false);

    return(
        <motion.div 
            className={styles.familyHat}
            animate={{ rotate: rotate ? 585 : 0}}
            onClick={() => {
                setRotate(!rotate);
            }}
            >
            <a href="#family" className={styles.family}>
                <h4 className={styles.blueTitle}>RODZINNE</h4>
                <img
                    src='https://i.postimg.cc/zvLGrJCh/cylinder-niebieski-1.png'
                    alt=""
                    className={styles.blue}
                    title={styles.title}
                />
            </a>
        </motion.div>
    )
}

export default Family;