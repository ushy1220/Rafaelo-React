import styles from './Plener.module.scss';
import { motion } from 'framer-motion';
import {useState} from 'react';
import { CARD_NAMES } from '../Links';

const Plener = ({selectCard}) => {

    const [rotate, setRotate] = useState(false);
    
    return(
        <motion.div 
            className={styles.plenerHat}
            animate={{ rotate: rotate ? 405 : 0}}
            onClick={() => {
                setRotate(!rotate);
            }}
            >
            <button className={styles.button} onClick={() => {selectCard(CARD_NAMES.PLENER)}}>
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