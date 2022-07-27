import Carousel from 'react-bootstrap/Carousel';
import img1 from '../images/img1.jpeg';
import img2 from '../images/img2.jpeg';
import img3 from '../images/img3.jpeg';
import { LazyLoadImage } from 'react-lazy-load-image-component';



function Carouselmain() {
  return (
    <Carousel>
      <Carousel.Item>
      <LazyLoadImage 
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='Carousel'>Burj Khalifa</h3>
          <p>View with sun light.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Down Town</h3>
          <p>Sky scrapper Buildings</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Burj Al Arab</h3>
          <p>
            Top Class hotel
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carouselmain;