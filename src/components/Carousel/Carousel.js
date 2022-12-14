import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Carousel.module.scss';

const HeadCarousel = () => {
  return (
    <Carousel className={styles.carousel}>
      <Carousel.Item className={styles.carouselItem}>
        <img
          className="d-block w-60 m-auto fir"
          src="https://i.postimg.cc/9fyjhDwZ/Czerwony-raster-highres.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item className={styles.carouselItem}>
        <img
          className="d-block w-60 m-auto my-5 sec"
          src=""
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item className={styles.carouselItem}>
        <img
          className="d-block w-60 m-auto mt-5"
          src="https://i.postimg.cc/j2MnjdS0/rafaelobezt-a.png"
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>
  );
}

export default HeadCarousel;