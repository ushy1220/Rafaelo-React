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

const App = () => {
  return (
    <Container>
      <Snow />
      <SocialMedia />
      <Links />
      <HeadCarousel /> 
      <Birthday />
      <Plener />
      <Family />
      <School />
      <Opinions />
      <CooperatedWith />
      <Footer />
    </Container>
  );
};

export default App;

//
//Column/Tabs
//<SearchForm />