import styles from './Home.module.scss';
import Container from '../Container/Container';
import SocialMedia from '../SocialMedia/SocialMedia';
import Links from '../Links/Links';
import Opinions from '../Opinions/Opinions';
import CooperatedWith from '../CooperatedWith/CooperatedWith';
import Form from '../Form/Form';
import Footer from '../Footer/Footer';
import HeadCarousel from "../Carousel/Carousel.js";
//import Snow from "../Weather/Snow/Snow.js";
import Snowfall from 'react-snowfall'

const Home = () => {

    return (
    <main className={styles.Home}>
        <Snowfall />
        <HeadCarousel />
        <SocialMedia />
        <Container>
            <Links />   
            <Opinions />
            <CooperatedWith />
            <Form />
        </Container> 
        <Footer />
    </main>
    )
}

export default Home;