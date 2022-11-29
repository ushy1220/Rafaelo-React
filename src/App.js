//import SearchForm from "./components/SearchForm/SearchForm.js";
import HeadCarousel from "./components/Carousel/Carousel.js";
//import Column from "./components/Column/Column.js";
import Container from "./components/Container/Container.js";
import Main from "./components/Main/Main.js";
import NavTabs from "./components/TabComponent/Tabs.js";

const App = () => {
  return (
    <Container>
      <HeadCarousel />    
      <NavTabs />
      <Main />
    </Container>
  );
};

export default App;


//Column/Tabs
//<SearchForm />