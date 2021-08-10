import React from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';
import Mainnav from '../../home/nav';
const Grace = () => {
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
          <h2>Grace Cossington Smith Gallery</h2>
          <br />
          <Image src='https://www.abbotsleigh.nsw.edu.au/Images/UserUploadedImages/182/GCSG1_banner.jpg'></Image>
          <br />
          <br />
          <p>
            Southgrace’s Grace Cossington Smith Gallery is more than an art
            gallery. It’s a valuable educational resource, a place where
            students learn through engagement with art and with visiting artists
            whose work is concerned with issues that affect us all. Plus, it is
            a gallery that is open to all.
          </p>
          <p>
            The Grace Cossington Smith Gallery is a not-for-profit project
            inspiring Abbotsleigh students and our community to engage, create
            and appreciate the culture and richness of art. Exhibitions enable
            dynamic learning experiences in a wide range of subjects and topics.
          </p>

          <p>
            The gallery is located on the campus of southgate, via Gate 7,
            Pacific Highway. Opening hours: Monday to Friday, 10 am-5 pm and
            Saturday, 9 am-4 pm. Free entry. Email: gcsg@southgate.nsw.edu.au
            Phone: +61 2 9473 7878
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

export default Grace;
