import React from 'react';
import { Carousel } from 'react-bootstrap';
import picOne from '../pictures/pc8.jpg';
import picTwo from '../pictures/pc6.jpg';
import picThree from '../pictures/pc7.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';
const Topslider = () => {
  React.useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className='topslider' data-aos='fade-down'>
      <Carousel fade>
        <Carousel.Item>
          <img className='d-block w-100' src={picOne} alt='First slide' />
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={picTwo} alt='Second slide' />
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={picThree} alt='Third slide' />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Topslider;
