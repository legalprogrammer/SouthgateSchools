import React from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';
import Mainnav from '../../home/nav';

const PageTwo = () => {
  return (
    <Container fluid>
      <Mainnav />
      <br />
      <br />
      <br />
      <Container className='news-details'>
        <br />
        <h2>Sports Hall and Aquatic Centre Programs Suspended</h2>
        <br />
        <p>
          As the health and wellbeing of every member of our community is at the
          forefront of our minds, Abbotsleigh is constantly monitoring
          information from the Australian and NSW Government Health Departments
          in relation to this virus.
        </p>
        <p>
          To guard against the spread of COVID-19, we have decided to suspend
          all programs offered from the Sports Hall and Aquatic Centre from
          Tuesday 17 March 2020 until further notice.
        </p>
        <p>For further information, please contact the following staff:</p>
        <p>
          Aquatic Centre – Jo Wheatley, or call 9473 7830 Sports Hall – Matt
          Shanahan, or call 9473 7926
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
  );
};

export default PageTwo;
