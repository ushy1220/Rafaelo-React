import styles from './Plener.module.scss';
import { motion } from 'framer-motion';
import {useState} from 'react';
import { CARD_NAMES } from '../Links';

const Plener = ({selectCard}) => {

    const [rotate, setRotate] = useState(false);
    const initRotate = () => {
        setRotate(!rotate);
        setTimeout(() => setRotate(rotate), 3000)
    }
    const displayCard = () => {
        setTimeout(() => {
            selectCard(CARD_NAMES.PLENER)
        }, 1500);
    }

    return(
        <motion.div 
            className={styles.plenerHat}
            animate={{ rotate: rotate ? 405 : 0}}
            onClick={initRotate}>
            <button className={styles.button} onClick={displayCard}>
                <a href="#plener" className={styles.plener}>
                    <h4 className={styles.greenTitle}>PLENER</h4>
                    <img
                        src='https://i.postimg.cc/W10tzbQ6/cylinder-zielony-1.png'
                        alt=""
                        className={styles.green}
                        title={styles.title}
                    />
                </a>
            </button>
        </motion.div>
    )
}

export default Plener;