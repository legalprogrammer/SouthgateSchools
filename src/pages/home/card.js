import React from 'react';
import { cardinfo } from './data';
import { paflet } from './data';
import { Card, Button, Col, Row, Container } from 'react-bootstrap';
import Aos from 'aos';
import 'aos/dist/aos.css';
const Cardlinks = () => {
  React.useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <Container className='campus' data-aos='fade-up'>
        <h1>Our key points of difference</h1>
        <p>
          Southgate’s holistic education, underpinned by the Christian faith,
          helps our girls thrive today and tomorrow. We empower amazing girls to
          do amazing things. We invite you to explore …
        </p>
      </Container>
      <Container style={{ marginTop: '50px' }} data-aos='fade-up'>
        <Row>
          {cardinfo.map((carditems) => {
            const { text, id, title, link, pic } = carditems;
            return (
              <Col key={id}>
                <Card
                  style={{
                    width: '20rem',
                    marginTop: '70px',
                    backgroundColor: '#000',
                  }}
                >
                  <Card.Img variant='top' src={pic} />
                  <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <br /> <br />
                    <Card.Text className='text'>{text}</Card.Text>
                    <br />
                    <a href={link}>
                      {' '}
                      <Button>READ MORE +</Button>
                    </a>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
      <div data-aos='fade-up'>
        <Row className='paflet'>
          {paflet.map((paflet) => {
            const { id, img, link } = paflet;
            return (
              <Col key={id}>
                <a href={link}>
                  <img src={img} />
                </a>
              </Col>
            );
          })}
        </Row>
      </div>
      <Container className='campus' data-aos='fade-up' id="campus">
        <h1>Our campuses</h1>
        <p>
          Abbotsleigh is situated across two campuses on 15 tree studded
          hectares in Wahroonga. Both Anglican campuses are located just a few
          minutes’ walk from Wahroonga train station; the Junior School is in
          Woonona Avenue and the Senior School is on the corner of the Pacific
          Highway and Ada Avenue.
        </p>
      </Container>
      <Container className='schools'data-aos='fade-up' style={{ marginTop: '250px' }}>
        <Row>
          <Col>
            <img src='https://www.abbotsleigh.nsw.edu.au/Images/UserUploadedImages/191/JS_campus_thumb.jpg' />
            <br />
            <br />
            <br />
            <h4>The Junior School campus</h4>
            <p>
              The Junior School offers bright, technology rich, adaptable
              classrooms and learning spaces for children T-6
            </p>
            <br />
            <a href='/Junior'>
              <button
                style={{
                  backgroundColor: '#fdc82f',
                  border: 'none',
                  padding: '7px 10px',
                }}
              >
                Find out more
              </button>
            </a>
          </Col>
          <Col>
            <img src='https://www.abbotsleigh.nsw.edu.au/Images/UserUploadedImages/191/SS_campus_thumb.jpg' />
            <br />
            <br />
            <br />
            <h4>The Senior School campus</h4>
            <p>
              Beyond the classroom, the Anglican Senior School provides amazing
              spaces for sport, music, dance and the visual arts
            </p>
            <br />
            <a href='/Senior'>
              <button
                style={{
                  backgroundColor: '#fdc82f',
                  border: 'none',
                  padding: '7px 10px',
                }}
              >
                Find out more
              </button>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Cardlinks;
