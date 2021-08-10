import React from 'react';
import Mainnav from '../home/nav';
import { Container, Carousel } from 'react-bootstrap';
import Footer from '../home/footer';
import { outline } from '../boarding/data';
const Boarding = () => {
  const [info, setinfo] = React.useState(outline);
  return (
    <div>
      <Mainnav />
      <Container fluid id='enrol' style={{ marginTop: '-50px', zIndex:"33" }}>
        <iframe
          width='1300'
          height='500'
          src='https://www.youtube.com/embed/4KK42U3V85A?controls=0'
          title='YouTube video player'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen
        ></iframe>
      </Container>
      <Container className='campus enroll-head' style={{ marginTop: '900px' }}>
        <h1>Boarding SCHOOL</h1>
        <p>
          When young children start school, they bring an innate sense of
          curiosity, wonder and excitement. These powerful attributes, when
          complemented with our educational programs and facilities, allow each
          student to achieve remarkable outcomes.
        </p>
      </Container>
      <br />
      <br />
      <br />
      <div>
        {info.map((info) => {
          const { title, nameid, id } = info;
          return (
            <button key={id} className='btn-g'>
              <a href={`#${nameid}`}>{title}</a>
            </button>
          );
        })}
      </div>
      <Carousel>
        {info.map((info) => {
          const { id, text, title, img, btnval, nameid } = info;
          return (
            <Carousel.Item interval={10000} key={id} id={nameid}>
              <div className='outline' id={nameid}>
                <div>
                  <img className='d-block w-100' src={img} alt={nameid} />
                </div>
                <Carousel.Caption id='cap'>
                  <p>
                    <h3>{title}</h3>
                    <div>{text}</div>
                    <a href='#'>
                      <button>{btnval}</button>
                    </a>
                  </p>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
      <br />
      <Footer />
    </div>
  );
};

export default Boarding;
