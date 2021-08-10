import React from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';
import Mainnav from '../../home/nav';
const Tech = () => {
  return (
    <div>
      <Container fluid>
        <Mainnav />
        <br />
        <br />
        <br />
        <Container className='news-details'>
          <br />
          <br />
          <h2>Technology</h2>
          <br />
          <Image src='https://www.abbotsleigh.nsw.edu.au/Images/UserUploadedImages/182/Technology_banner.jpg'></Image>
          <br />
          <br />
          <p>
            In today’s high-tech world, access to high quality and well managed
            technological learning tools is an essential component in providing
            effective and equitable use of technology within the school.
          </p>
        </Container>

        <div className='footer'>
          <Container>
            <Row>
              <Col>
                © Southgate | An Anglican Pre K-12 Day and Boarding School for
                Girls | CRICOS provider code 02270F
              </Col>
              <Col>
                <a href='#'>contact</a>
                <strong>privacy</strong>
                <strong>Terms & Conditions</strong>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    </div>
  );
};

export default Tech;
