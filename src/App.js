import HeadCarousel from "./components/Carousel/Carousel.js";
import Container from "./components/Container/Container.js";
import Opinions from "./components/Opinions/Opinions.js";
import Footer from "./components/Footer/Footer.js";
import CooperatedWith from "./components/CooperatedWith/CooperatedWith.js";
import SocialMedia from "./components/SocialMedia/SocialMedia.js";
import Birthday from "./components/SecBirthday/Birthday.js";
import Family from "./components/SecFamily/Family.js";
import Plener from "./components/SecPlener/Plener.js";
import School from "./components/SecSchool/School.js";
import Links from "./components/Links/Links.js";
import Snow from "./components/Weather/Snow/Snow.js";
import styles from "./App.module.scss";

const App = () => {
  return (
  <div className={styles.body}>
    <Snow />
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
      <Footer />
    </Container>
  </div>
    
  );
};

export default App;

//<Snow />
//Column/Tabs
//<SearchForm />