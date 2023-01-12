import styles from './School.module.scss';
import { motion } from 'framer-motion';
import {useState} from 'react';
import { CARD_NAMES } from '../Links';

const School = ({selectCard}) => {

    const [rotate, setRotate] = useState(false);
    const initRotate = () => {
        setRotate(!rotate);
        setTimeout(() => setRotate(rotate), 2500)
    }
    const displayCard = () => {
        setTimeout(() => {
            selectCard(CARD_NAMES.SCHOOL)
        }, 1500);
    }
    
    return(
        <motion.div 
            className={styles.schoolHat}
            animate={{ rotate: rotate ? 495 : 0}}
            onClick={initRotate}>
            <button className={styles.button} onClick={displayCard}>
                <a href="#school" className={styles.school}>
                    <h4 className={styles.redTitle}>BAL SZKOLNY</h4>
                    <img
                        src='https://i.postimg.cc/PJBrfByR/cylinder-czerwony-1.png'
                        alt=""
                        className={styles.red}
                        title={styles.title}
                    />
                </a>
            </button>
        </motion.div>
    )
}

export default School;