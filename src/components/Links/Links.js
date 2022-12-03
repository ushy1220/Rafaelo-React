import styles from './Links.module.scss';

const Links = () => {
    return (
        <div className={styles.container}>
            <a href="#birthday" className={styles.birthday}>
                <h4 className={styles.yellowTitle}>URODZINY</h4>
                <img
                    src='https://i.postimg.cc/pTrY7bmq/kleks-Yellow.png'
                    alt=""
                    className={styles.yellow}
                    title="Urodziny"
                />
            </a>
            <a href="#plener" className={styles.plener}>
                <img
                    src='https://i.postimg.cc/J4wKsr7j/kleks-Green.png'
                    alt=""
                    className={styles.green}
                    title={styles.title}
                />
                <h4 className={styles.greenTitle}>PLENER</h4>
            </a>
            <a href="#family" className={styles.family}>
                <img
                    src='https://i.postimg.cc/cJjwPhrf/kleks-Blue.png'
                    alt=""
                    className={styles.blue}
                    title={styles.title}
                />
                <h4 className={styles.blueTitle}>RODZINNE</h4>
            </a>
            <a href="#school" className={styles.school}>
                <img
                    src='https://i.postimg.cc/FsZchNYr/kleksRed.png'
                    alt=""
                    className={styles.red}
                    title={styles.title}
                />  
                <h4 className={styles.redTitle}>BAL SZKOLNY</h4>
            </a>
        </div>
    )
}

export default Links;
