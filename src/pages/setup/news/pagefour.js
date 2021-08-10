import React from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';
import Mainnav from '../../home/nav';

const Pagefour = () => {
  return (
    <Container fluid>
      <Mainnav />
      <br />
      <br />
      <br />
      <Container className='news-details'>
        <br />
        <br />
        <h2>Harry Sdraulig to Compose for Sydney Symphony Initiative</h2>
        <br />
        <br />
        <Image src='https://www.abbotsleigh.nsw.edu.au/Images/UserUploadedImages/213/ILoad32022___Medium.jpg'></Image>
        <br />
        <br />
        <p>
          Abbotsleigh’s own Composer in Residence, Harry Sdraulig, has been
          included in a new, multi-million dollar commissioning project with the
          Sydney Symphony Orchestra entitled ‘50 Fanfares’. As part of the
          project, Harry will be composing a new work for the full orchestra,
          with the world premiere performance slated for 2021.
        </p>
        <p>
          The orchestra’s CEO, Emma Dunch, said they were aiming to “renew the
          contemporary Australian repertoire” with a sweep of 50 commissions
          that are “deliberately structured” to span genres, styles and settings
          – from Opera House debuts to community orchestras to school halls. The
          project is being funded “entirely through philanthropic support”, she
          said.
        </p>
        <p>
          Harry’s commission with the Sydney Symphony Orchestra follows his
          previous collaborations with some of Australia’s other full time
          professional orchestras including the Melbourne, Queensland and
          Tasmanian Symphony Orchestras.
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

export default Pagefour;
