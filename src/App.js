//import SearchForm from "./components/SearchForm/SearchForm.js";
import HeadCarousel from "./components/Carousel/Carousel.js";
import List from "./components/List/List.js";
import Container from "./components/Container/Container.js";
import Main from "./components/Main/Main.js";

const App = () => {
  return (
    <Container>
      <HeadCarousel />    
      <List />
      <Main />
    </Container>
  );
};

export default App;

//<SearchForm />