import React from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';
import Mainnav from '../../home/nav';

const PageThree = () => {
  return (
    <Container fluid>
      <Mainnav />
      <br />
      <br />
      <br />
      <Container className='news-details'>
        <br />
        <h2>GCSG Temporary Closure and Visualising Stories Exhibition Information</h2>
        <br />
        <p>
          The Grace Cossington Smith is currently closed to visitors other than
          Abbotsleigh students. The exhibition planned to open next week is
          Visualising Stories, an exhibition highlighting diverse approaches to
          contemporary children’s book illustration by Liz Anelli, Lorena
          Arrington, Tannya Harricks, Bethany Macdonald and Aura Parker.
        </p>
        <p>
          “Liz Anelli, Lorena Carrington, Tannya Harricks, Bethany Macdonald and
          Aura Parker employ a range of artistic processes and mediums to
          respond to a text to create engaging stories. The techniques are
          diverse, including oil on linen, collage, printmaking techniques,
          photography, watercolour, coloured pencils and more.
        </p>
        <p>
          The wonder of visualising stories is that the artist is able to shape
          the story and create a unique reading experience that goes beyond
          words. Words and images unite to offer a rich and rewarding experience
          for the reader.” Paul Macdonald, Children’s Bookshop
        </p>
        <p>
          While the gallery is closed, we will endeavour to a create virtual
          exhibition tour and we hope you and your children will enjoy this
          alternate gallery experience.
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

export default PageThree;
