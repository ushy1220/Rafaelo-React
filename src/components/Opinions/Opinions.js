import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Opinions.module.scss';

const Opinions = () => {
    return (
        <Carousel className={styles.carousel}>
          <Carousel.Item className={styles.item}>
            <img
              className={styles.img}
              src="https://i.postimg.cc/Dw39KDRh/pizza-3.jpg"
              alt="Opinia 1"
            />
          </Carousel.Item>

          <Carousel.Item className={styles.item}>
            <img
              className={styles.img}
              src="https://i.postimg.cc/Dw39KDRh/pizza-3.jpg"
              alt="Opinia 2"
            />
          </Carousel.Item>
          
          <Carousel.Item className={styles.item}>
            <img
              className={styles.img}
              src="https://i.postimg.cc/Dw39KDRh/pizza-3.jpg"
              alt="Opinia 3"
            />
          </Carousel.Item>
        </Carousel>
      );
}

export default Opinions;