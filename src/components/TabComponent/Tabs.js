import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Birthday from './PageBirthday/Birthday';
import styles from './Tabs.module.scss';

const NavTabs = () => {
  return (
    <div className={styles.Tabs}>
      {/* Tab nav */}
      <ul className={styles.nav}>
        <li>Tab 1</li>
        <li>Tab 2</li>
        <li>Tab 3</li>
        <li>Tab 4</li>
      </ul>
      <div className={styles.outlet}>
        {/* content will be shown here */}
      </div>
    </div>
  )
  
}

export default NavTabs;
/*
<Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="home" title="Home">
        <Birthday />
      </Tab>
      <Tab eventKey="profile" title="Profile">
        <Birthday />
      </Tab>
      <Tab eventKey="longer-tab" title="Loooonger Tab">
        <Birthday />
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        <Birthday />
      </Tab>
    </Tabs>
 */
