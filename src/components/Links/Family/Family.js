import styles from './Family.module.scss';
import { motion } from 'framer-motion';
import {useState} from 'react';
import { CARD_NAMES } from '../Links';

const Family = ({selectCard}) => {

    const [rotate, setRotate] = useState(false);
    const initRotate = () => {
        setRotate(!rotate);
        setTimeout(() => setRotate(rotate), 2500)
    }
    const displayCard = () => {
        setTimeout(() => {
            selectCard(CARD_NAMES.FAMILY)
        }, 1500);
    }

    return(
        <motion.div
            className={styles.familyHat}
            animate={{ rotate: rotate ? 585 : 0 }}
            onClick={initRotate}>
            <button className={styles.button} onClick={displayCard}>
                <a href="#family" className={styles.family}>
                    <h4 className={styles.blueTitle}>RODZINNE</h4>
                    <img
                        src='https://i.postimg.cc/zvLGrJCh/cylinder-niebieski-1.png'
                        alt=""
                        className={styles.blue}
                        title={styles.title}
                    />
                </a>
            </button>    
        </motion.div>
    )
}

export default Family;


/*

*/