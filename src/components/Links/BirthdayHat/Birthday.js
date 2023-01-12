import styles from './Birthday.module.scss';
import { motion } from 'framer-motion'
import {useState} from 'react';
import { CARD_NAMES } from '../Links';

const Birthday = ({selectCard}) => {

    const [rotate, setRotate] = useState(false);
    const initRotate = () => {
        setRotate(!rotate);
        setTimeout(() => setRotate(rotate), 3000)
    }
    const displayCard = () => {
        setTimeout(() => {
            selectCard(CARD_NAMES.BIRTHDAY)
        }, 1500);   
    }

    return (
        <motion.div 
            className={styles.birthdayHat}
            animate={{ rotate: rotate ? 315 : 0 }}
            onClick={()=> {
                initRotate();

                }}>
                <button className={styles.button} onClick={displayCard}>
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