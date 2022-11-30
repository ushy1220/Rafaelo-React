import React, { useState } from 'react';
import Birthday from './PageBirthday/Birthday';
import Family from './PageFamily/Family';
import Plener from './PagePlener/Plener';
import School from './PageSchool/School';
import styles from './Tabs.module.scss';

const NavTabs = () => {

  const [activeTab, setActiveTab] = useState("tab1");

  
  const handleTab1 = () => { //  Functions to handle Tab Switching
    setActiveTab("tab1"); // update the state to tab1
  };

  const handleTab2 = () => {
    setActiveTab("tab2"); // update the state to tab2
  };

  const handleTab3 = () => {
    setActiveTab("tab3"); // update the state to tab2
  };

  const handleTab4 = () => {
    setActiveTab("tab4"); // update the state to tab2
  };

  return (
    <div className={styles.Tabs}>
      {/* Tab nav */}
      <ul className={styles.nav}>
        <li className={activeTab === "tab1" ? "active" : ""} onClick={handleTab1}>URODZINY</li>
        <li className={activeTab === "tab2" ? "active" : ""} onClick={handleTab2}>RODZINNE</li>
        <li className={activeTab === "tab3" ? "active" : ""} onClick={handleTab3}>PLENER</li>
        <li className={activeTab === "tab4" ? "active" : ""} onClick={handleTab4}>BAL SZKOLNY</li>
      </ul>
      <div className={styles.outlet}>
        {activeTab === 'tab1' ? <Birthday /> : ""}
        {activeTab === 'tab2' ? <Family /> : ""} 
        {activeTab === 'tab3' ? <Plener /> : ""}
        {activeTab === 'tab4' ? <School /> : ""}
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
