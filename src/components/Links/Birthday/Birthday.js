import styles from './Birthday.module.scss';
import { motion } from 'framer-motion'
import {useState} from 'react';
import { CARD_NAMES } from '../Links';

const Birthday = ({selectCard}) => {

    const [rotate, setRotate] = useState(false);
    
    return (
        <motion.div 
            className={styles.birthdayHat}
            animate={{ rotate: rotate ? 315 : 0 }}
            onClick={() => {
                setRotate(!rotate);
            }}
            >
                <button className={styles.button} onClick={() => {selectCard(CARD_NAMES.BIRTHDAY)}}>
                    <a href="#birthday" className={styles.birthday}>   
                        <h4 className={styles.yellowTitle}>URODZINY</h4>
                        <img
                            src='https://i.postimg.cc/FH22TSfk/cylinder-ty-1.png'
                            alt=""
                            className={styles.yellow}
                            title={styles.title}
                        />
                    </a> 
                </button>
            
        </motion.div>        
    )
}

export default Birthday;