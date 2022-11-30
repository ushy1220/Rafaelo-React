//import SearchForm from "./components/SearchForm/SearchForm.js";
import HeadCarousel from "./components/Carousel/Carousel.js";
//import Column from "./components/Column/Column.js";
import Container from "./components/Container/Container.js";
import Main from "./components/Main/Main.js";
import NavTabs from "./components/TabComponent/Tabs.js";
import Opinions from "./components/Opinions/Opinions.js";
import Footer from "./components/Footer/Footer.js";
import CooperatedWith from "./components/CooperatedWith/CooperatedWith.js";
import SocialMedia from "./components/SocialMedia/SocialMedia.js";

const App = () => {

  return (
    <Container>
      <SocialMedia />
      <HeadCarousel />    
      <NavTabs />
      <Opinions />
      <Main />
      <CooperatedWith />
      <Footer />
    </Container>
  );
};

export default App;

//
//Column/Tabs
//<SearchForm />