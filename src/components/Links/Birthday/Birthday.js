import styles from './Birthday.module.scss';
import { motion } from 'framer-motion'
import {useState} from 'react';

const Birthday = () => {

    const [rotate, setRotate] = useState(false);
    
    return (
        <motion.div 
            className={styles.birthdayHat}
            animate={{ rotate: rotate ? 315 : 0 }}
            onClick={() => {
                setRotate(!rotate);
            }}
            >
            <a href="#birthday"
             className={styles.birthday} 
             >
                <h4 className={styles.yellowTitle}>URODZINY</h4>
                <img
                    src='https://i.postimg.cc/FH22TSfk/cylinder-ty-1.png'
                    alt=""
                    className={styles.yellow}
                    title={styles.title}
                />
            </a> 
        </motion.div>        
    )
}

export default Birthday;