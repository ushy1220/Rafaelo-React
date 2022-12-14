import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Opinions.module.scss';

const Opinions = () => {
    return (
      <section className={styles.container}>
        <h2>Opinie</h2>
        <Carousel className={styles.carousel}>
          <Carousel.Item className={styles.item}>
            <img
              className={styles.img}
              src="https://i.postimg.cc/SskrjLWf/opinia1.png"
              alt="Opinia 1"
            />
          </Carousel.Item>

          <Carousel.Item className={styles.item}>
            <img
              className={styles.img}
              src="https://i.postimg.cc/d30jjqN7/opinia2.png"
              alt="Opinia 2"
            />
          </Carousel.Item>
          
          <Carousel.Item className={styles.item}>
            <img
              className={styles.img}
              src="https://i.postimg.cc/Kc9NvM4t/opinia3.png"
              alt="Opinia 3"
            />
          </Carousel.Item>

          <Carousel.Item className={styles.item}>
            <img
              className={styles.img}
              src="https://i.postimg.cc/J4GQyzBv/opinia4.png"
              alt="Opinia 4"
            />
          </Carousel.Item>

          <Carousel.Item className={styles.item}>
            <img
              className={styles.img}
              src="https://i.postimg.cc/J4v5jCNn/opinia5.png"
              alt="Opinia 5"
            />
          </Carousel.Item>

          <Carousel.Item className={styles.item}>
            <img
              className={styles.img}
              src="https://i.postimg.cc/rmV1qVkh/opinia6.png"
              alt="Opinia 6"
            />
          </Carousel.Item>

        </Carousel>
      </section>
        
      );
}

export default Opinions;