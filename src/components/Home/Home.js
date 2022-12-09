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
import MessWrapper from '../MessWrapper/MessWrapper';

const Home = () => {

    return (
    <main className={styles.Home}>
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
        <MessWrapper />
        <Footer />
    </main>
    )
}

export default Home;