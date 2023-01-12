import Container from '../Container/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Birthday from './BirthdayHat/Birthday';
import BirthdayCard from './SecBirthday/BirthdayCard'

import Family from './FamilyHat/Family';
import FamilyCard from './SecFamily/FamilyCard';

import Plener from './PlenerHat/Plener';
import PlenerCard from './SecPlener/PlenerCard';

import School from './SchoolHat/School';
import SchoolCard from './SecSchool/SchoolCard';

import NoCard from './SecNoCard/NoCard'

import styles from './Links.module.scss';
import { useState } from 'react';

//import {motion} from 'framer-motion';
//import useState from 'react';
//import clsx from 'clsx';
//import Content from './Content/Content';

export const CARD_NAMES = {
    BIRTHDAY: 'birthday',
    FAMILY: 'family',
    PLENER: 'plener',
    SCHOOL: 'school',
    NOCARD: 'nocard'
}

const Links = () => {

    const [currentCard, setCurrentCard] = useState(CARD_NAMES.NOCARD)

    return(
        <Container className={styles.Container}>
            <Row>
                <Col className={styles.left}>
                    <Birthday selectCard={setCurrentCard} />
                    <Family selectCard={setCurrentCard} />
                </Col>
                <Col className={styles.middle}>
                    <div className={styles.cards} currentcard={(currentCard)}>
                        {currentCard === CARD_NAMES.BIRTHDAY && <BirthdayCard />}
                        {currentCard === CARD_NAMES.FAMILY && <FamilyCard />}
                        {currentCard === CARD_NAMES.PLENER && <PlenerCard />}
                        {currentCard === CARD_NAMES.SCHOOL && <SchoolCard />}
                        {currentCard === CARD_NAMES.NOCARD && <NoCard />}
                    </div>
                </Col>
                <Col className={styles.right}>
                    <Plener selectCard={setCurrentCard} />
                    <School selectCard={setCurrentCard} /> 
                </Col>
            </Row> 
        </Container>
    )
}

export default Links;

/*
import styles from './Links.module.scss';
import {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { motion } from 'framer-motion' 

const Links = () => {
    
    const [rotate, setRotate] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const handleClick = e => {
        e.preventDefault();
        setIsActive(current => !current)
    }
    
    return (
        <Container className={styles.container}>
            <Row>
                <Col className={styles.left}>
                    <motion.div 
                        className={styles.birthdayHat}
                        animate={{ rotate: rotate ? 315 : 0 }}
                        onClick={() => {
                            setRotate(!rotate);
                        }}
                        >
                        <a href="#birthday" className={styles.birthday} onClick={handleClick}>
                            <h4 className={styles.yellowTitle}>URODZINY</h4>
                            <img
                                src='https://i.postimg.cc/FH22TSfk/cylinder-ty-1.png'
                                alt=""
                                className={styles.yellow}
                                title={styles.title}
                            />
                        </a> 
                    </motion.div>

                    <motion.div 
                        className={styles.familyHat}
                        animate={{ rotate: rotate ? 225 : 0}}
                        onClick={() => {
                            setRotate(!rotate);
                        }}
                        >
                        <a href="#family" className={styles.family} onClick={handleClick}>
                            <h4 className={styles.blueTitle}>RODZINNE</h4>
                            <img
                                src='https://i.postimg.cc/zvLGrJCh/cylinder-niebieski-1.png'
                                alt=""
                                className={styles.blue}
                                title={styles.title}
                            />
                        </a>
                    </motion.div>
                </Col>

                <Col className={styles.middle}>
                    <div className={styles.birthdayCard}>
                    </div>
                    <div className={styles.plenerCard}>
                    </div>
                    <div className={styles.familyCard}>
                    </div>
                    <div className={styles.schoolCard}>
                    </div>
                    <div className={styles.noCard}>
                    </div>
                </Col>

                <Col className={styles.right}>
                    <motion.div 
                    className={styles.plenerHat}
                    animate={{ rotate: rotate ? 45 : 0}}
                    onClick={() => {
                        setRotate(!rotate);
                    }}
                    >
                        <a href="#plener" className={styles.plener} onClick={handleClick}>
                            <h4 className={styles.greenTitle}>PLENER</h4>
                            <img
                                src='https://i.postimg.cc/W10tzbQ6/cylinder-zielony-1.png'
                                alt=""
                                className={styles.green}
                                title={styles.title}
                            />
                        </a>
                    </motion.div>

                    <motion.div 
                        className={styles.schoolHat}
                        animate={{ rotate: rotate ? 135 : 0}}
                        onClick={() => {
                            setRotate(!rotate);
                        }}
                        >
                        <a href="#school" className={styles.school} onClick={handleClick}>
                            <h4 className={styles.redTitle}>BAL SZKOLNY</h4>
                            <img
                                src='https://i.postimg.cc/PJBrfByR/cylinder-czerwony-1.png'
                                alt=""
                                className={styles.red}
                                title={styles.title}
                            />
                        </a>
                    </motion.div>
                </Col>
            </Row>
        </Container>
    )
}

export default Links;
*/






/*
const handleClick = e => {
        e.preventDefault();
        setIsActive(current => !current)
    }
    
className={isActive ? styles.familyActive : styles.family}
*/





/*
import styles from './Links.module.scss';
import {useState} from 'react';

const Links = () => {
    
    const [isActive, setIsActive] = useState(false);

    const handleClick = e => {
        e.preventDefault();
        setIsActive(current => !current)
    }
    
    return (
        <section className={styles.container}>
            <div className={styles.birthday}>
                <button href="#birthday" className={isActive ? styles.birthdayActive : styles.birthday} onClick={handleClick}>
                    <h4 className={styles.yellowTitle}>URODZINY</h4>
                </button>    
            </div>
            

            <a href="#plener" className={isActive ? styles.plenerActive : styles.plener} onClick={handleClick}>
                <img
                    src='https://i.postimg.cc/W10tzbQ6/cylinder-zielony-1.png'
                    alt=""
                    className={styles.green}
                    title={styles.title}
                />
                <h4 className={styles.greenTitle}>PLENER</h4>
            </a>
            <a href="#family" className={isActive ? styles.familyActive : styles.family} onClick={handleClick}>
                <img
                    src='https://i.postimg.cc/zvLGrJCh/cylinder-niebieski-1.png'
                    alt=""
                    className={styles.blue}
                    title={styles.title}
                />
                <h4 className={styles.blueTitle}>RODZINNE</h4>
            </a>
            <a href="#school" className={isActive ? styles.schoolActive : styles.school} onClick={handleClick}>
                <img
                    src='https://i.postimg.cc/PJBrfByR/cylinder-czerwony-1.png'
                    alt=""
                    className={styles.red}
                    title={styles.title}
                />  
                <h4 className={styles.redTitle}>BAL SZKOLNY</h4>
            </a>
        </section>
    )
}

export default Links;
*/