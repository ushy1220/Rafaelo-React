
import styles from './AboutUs.module.scss';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';

const AboutUs = () => {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <Tabs 
            selectedIndex={tabIndex} 
            onSelect={(index) => setTabIndex(index)}
        >
        <TabList className={styles.tabList}>
            <Tab>
                <img src='https://i.postimg.cc/5tPrzxcm/1.png' className={styles.image} alt=''/>
            </Tab>
            <Tab>
                <img src='https://i.postimg.cc/5tPrzxcm/1.png' className={styles.image} alt=''/>
            </Tab>
            <Tab>
                <img src='https://i.postimg.cc/5tPrzxcm/1.png' className={styles.image} alt=''/>
            </Tab>
            <Tab>
                <img src='https://i.postimg.cc/5tPrzxcm/1.png' className={styles.image} alt=''/>
            </Tab>
            <Tab>
                <img src='https://i.postimg.cc/5tPrzxcm/1.png' className={styles.image} alt=''/>
            </Tab>
            <Tab>
                <img src='https://i.postimg.cc/5tPrzxcm/1.png' className={styles.image} alt=''/>
            </Tab>
            <Tab>
                <img src='https://i.postimg.cc/5tPrzxcm/1.png' className={styles.image} alt=''/>
            </Tab>
            <Tab>
                <img src='https://i.postimg.cc/5tPrzxcm/1.png' className={styles.image} alt=''/>
            </Tab>
            <Tab>
                <img src='https://i.postimg.cc/5tPrzxcm/1.png' className={styles.image} alt=''/>
            </Tab>
            <Tab >
                <img src='https://i.postimg.cc/5tPrzxcm/1.png' className={styles.image} alt=''/>
            </Tab>
            <Tab>
                <img src='https://i.postimg.cc/5tPrzxcm/1.png' className={styles.image} alt=''/>
            </Tab>
            <Tab>
                <img src='https://i.postimg.cc/5tPrzxcm/1.png' className={styles.image} alt=''/>
            </Tab>
        </TabList>

        <TabPanel className={styles.panel}>
            <div className={styles.container}>
                <div className={styles.photoLeft}>
                    <p>przykładowe zdjęcie</p>
                </div>
                <div className={styles.description}>
                    <p>przykładowy tekst</p>
                </div>
            </div>
        </TabPanel>
        <TabPanel>
            <div className={styles.container}>
                <div className={styles.photoRight}></div>
                <div className={styles.description}></div>
            </div>
        </TabPanel>
        <TabPanel>
            <div className={styles.container}>
                <div className={styles.photoLeft}></div>
                <div className={styles.description}></div>
            </div>
        </TabPanel>
        <TabPanel>
            <div className={styles.container}>
                <div className={styles.photoRight}></div>
                <div className={styles.description}></div>
            </div>
        </TabPanel>
        <TabPanel>
            <div className={styles.container}>
                <div className={styles.photoLeft}></div>
                <div className={styles.description}></div>
            </div>
        </TabPanel>
        <TabPanel>
            <div className={styles.container}>
                <div className={styles.photoRight}></div>
                <div className={styles.description}></div>
            </div>
        </TabPanel>
        <TabPanel>
            <div className={styles.container}>
                <div className={styles.photoLeft}></div>
                <div className={styles.description}></div>
            </div>
        </TabPanel>
        <TabPanel>
            <div className={styles.container}>
                <div className={styles.photoRight}></div>
                <div className={styles.description}></div>
            </div>
        </TabPanel>
        <TabPanel>
            <div className={styles.container}>
                <div className={styles.photoLeft}></div>
                <div className={styles.description}></div>
            </div>
        </TabPanel>
        <TabPanel>
            <div className={styles.container}>
                <div className={styles.photoRight}></div>
                <div className={styles.description}></div>
            </div>
        </TabPanel>
        <TabPanel>
            <div className={styles.container}>
                <div className={styles.photoLeft}></div>
                <div className={styles.description}></div>
            </div>
        </TabPanel>
        <TabPanel>
            <div className={styles.container}>
                <div className={styles.photoRight}></div>
                <div className={styles.description}></div>
            </div>
        </TabPanel>
      </Tabs>
    )
}

export default AboutUs;
