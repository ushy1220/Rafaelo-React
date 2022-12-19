import styles from "./App.module.scss";
import Nav from './components/Nav/Nav';
import ColumnList from "./components/MessagesColumnList/ColumnList.js";
import Home from "./components/Home/Home.js";
import AboutUs from './components/AboutUs/AboutUs.js';
import { useState } from "react";

export const SCREEN_NAMES = {
  HOME: 'home',
  MESS: 'mess',
  ABOUT: 'about'
}

const App = () => {

  const [currentScreen, setCurrentScreen] = useState(SCREEN_NAMES.HOME);

  return (
  <main className={styles.body}>
    <Nav selectScreen={setCurrentScreen} currentScreen={currentScreen}/> 
      {currentScreen === SCREEN_NAMES.HOME && <Home />}
      {currentScreen === SCREEN_NAMES.MESS && <ColumnList />}
      {currentScreen === SCREEN_NAMES.ABOUT && <AboutUs />}
  </main>
  );
};

export default App;

/*
import styles from "./App.module.scss";
//import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
//import { useEffect, useState } from 'react';
//import CircleCursor from './components/CircleCursor/CircleCursor.js';
import Nav from './components/Nav/Nav';
import ColumnList from "./components/MessagesColumnList/ColumnList.js";
import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home/Home.js";
import AboutUs from './components/AboutUs/AboutUs.js';
import { useState } from "react";

const App = () => {

  return (
  <main className={styles.body}>
    <Nav /> 
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/mess" element={<ColumnList />} />
      <Route path="/about" element={<AboutUs />} />
    </Routes>
  </main>
  );
};

export default App;
*/











// 
//<Snow />
//Column/Tabs
//<SearchForm />

/*

  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return:
{
      loaded ? <CircleCursor initial={{circleSize:'5rem',dotSize:'2rem'}} hover={{circleSize:'1rem'}}/> : <br/>
    }
*/