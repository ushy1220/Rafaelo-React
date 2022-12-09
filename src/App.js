import HeadCarousel from "./components/Carousel/Carousel.js";
import Snow from "./components/Weather/Snow/Snow.js";
import styles from "./App.module.scss";
//import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
//import { useEffect, useState } from 'react';
//import CircleCursor from './components/CircleCursor/CircleCursor.js';
import MesBut from './components/AAA/Mes';
import ColumnList from "./components/MessagesColumnList/ColumnList.js";
import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home/Home.js";

const App = () => {
  return (
  <main className={styles.body}>
    <MesBut /> 
    <Snow />
    <HeadCarousel />
    <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/mess" element={<ColumnList />} />
        </Routes>
  </main>
  );
};

export default App;


/*

const App = () => {
  return (
  <div className={styles.body}>
    <Snow />
    <Mes />
    <HeadCarousel />
    <Container>   
      <SocialMedia />     
      <Links /> 
      <Birthday />
      <Plener />
      <Family />
      <School />
      <Opinions />
      <CooperatedWith />
      <Form />
      <Footer />
      <MessWrapper />
    </Container> 
  </div>
  );
};

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