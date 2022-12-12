import styles from './Home.module.scss';
import Container from '../Container/Container';
import SocialMedia from '../SocialMedia/SocialMedia';
import Links from '../Links/Links';
import Birthday from '../SecBirthday/Birthday';
import Plener from '../SecPlener/Plener';
import Family from '../SecFamily/Family';
import School from '../SecSchool/School';
import Opinions from '../Opinions/Opinions';
import CooperatedWith from '../CooperatedWith/CooperatedWith';
import Form from '../Form/Form';
import Footer from '../Footer/Footer';
import HeadCarousel from "../Carousel/Carousel.js";
import Snow from "../Weather/Snow/Snow.js";

const Home = () => {

    return (
    <main className={styles.Home}>
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
            <Form />
        </Container> 
        <Footer />
    </main>
    )
}

export default Home;