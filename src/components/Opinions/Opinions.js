import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Opinions.module.scss';

const Opinions = () => {
    return (
      <section className={styles.container}>
        <Carousel className={styles.carousel}>
          <Carousel.Item className={styles.item}>
            <img
              className={styles.img}
              src="https://i.postimg.cc/7Zb9NMN8/opinia1.png"
              alt="Opinia 1"
            />
          </Carousel.Item>

          <Carousel.Item className={styles.item}>
            <img
              className={styles.img}
              src="https://i.postimg.cc/g0VZyn1b/opinia2.png"
              alt="Opinia 2"
            />
          </Carousel.Item>
          
          <Carousel.Item className={styles.item}>
            <img
              className={styles.img}
              src="https://i.postimg.cc/WpWJ7RYz/opinia3.png"
              alt="Opinia 3"
            />
          </Carousel.Item>

          <Carousel.Item className={styles.item}>
            <img
              className={styles.img}
              src="https://i.postimg.cc/d1MKF003/opinia4.png"
              alt="Opinia 4"
            />
          </Carousel.Item>

          <Carousel.Item className={styles.item}>
            <img
              className={styles.img}
              src="https://i.postimg.cc/25DwfRDm/opinia5.png"
              alt="Opinia 5"
            />
          </Carousel.Item>

          <Carousel.Item className={styles.item}>
            <img
              className={styles.img}
              src="https://i.postimg.cc/kGzQ1Lc0/opinia6.png"
              alt="Opinia 6"
            />
          </Carousel.Item>

          <Carousel.Item className={styles.item}>
            <img
              className={styles.img}
              src="https://i.postimg.cc/y6t0H4m5/opinia7.png"
              alt="Opinia 7"
            />
          </Carousel.Item>
        </Carousel>
      </section>
        
      );
}

export default Opinions;