import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Carousel.module.scss';

const HeadCarousel = () => {
  return (
    <Carousel className={styles.carousel}>
      <Carousel.Item>
        <img
          className="d-block w-50 m-auto fir"
          src="https://i.postimg.cc/j2MnjdS0/rafaelobezt-a.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 m-auto my-5 sec"
          src="https://i.postimg.cc/vDFQtJB2/rafaelo1.png"
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 th"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>
  );
}

export default HeadCarousel;