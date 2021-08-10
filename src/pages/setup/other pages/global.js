import React from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';
import Mainnav from '../../home/nav';
const Global = () => {
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
          <h2>Global perspective</h2>
          <br />
          <Image src='https://www.abbotsleigh.nsw.edu.au/Images/UserUploadedImages/182/GlobalPerspective_banner.jpg'></Image>
          <br />
          <br />
          <p>
            One way of helping students to develop a dynamic world view is to
            build meaningful connections with people in other countries.
          </p>
          <p>
            Each year many students, day girls and boarders, apply for the very
            popular opportunity to go on exchange. Most exchanges are for a term
            or a semester although, in some cases, the exchange is for a shorter
            period and may take the form of a group visit. During this time, the
            girls experience a different culture and academic environment while
            also honing their foreign language skills.
          </p>

          <p>
            Additionally, they ultimately learn more about their own county by
            hosting the student with whom the exchange had been organised. Thus,
            the whole family benefits from this experience. We are very pleased
            to announce a developing a connection with the Neerja Modi School in
            Jaipur, India.
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

export default Global;
