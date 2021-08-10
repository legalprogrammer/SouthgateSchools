import React from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';
import Mainnav from '../../home/nav';

const Pageone = () => {
  return (
    <Container fluid>
      <Mainnav />
      <br />
      <br />
      <br />
      <Container className='news-details'>
        <br />
        <br />
        <h2>2020 Grant winner Linda Dalton</h2>
        <br />
        <br />
        <Image src='https://www.abbotsleigh.nsw.edu.au/Images/UserUploadedImages/213/ILoad32033___Medium.jpg'></Image>
        <br />
        <br />
        <strong>By Rebecca Baillie (1989), AOGU Vice President</strong>
        <p>
          It’s a rite of passage many 16 and 17-year-olds take for granted:
          learning to drive and getting their Ps.
        </p>
        <p>
          But for some young people in and around Linda Dalton’s (1979) hometown
          of Bellingen, on the NSW Mid-North Coast, getting a driver’s licence
          can be tougher than it seems.
        </p>
        <p>
          “The Bellingen Shire has a relatively low socio-economic index… many
          people are employed in part-time work, juggling childcare and work,
          and many rely in part or altogether on Centrelink benefits,” Linda
          explained.
        </p>
        <p>
          “There are a significant number of single parent families who are only
          just getting by.”
        </p>
        <p>
          “In Bellingen, parents (can) struggle to scrape together money for
          even one driving lesson with a driving school, and working parents,
          particularly single parents… struggle to find the hours to supervise
          their children’s driving themselves,” Linda said.
        </p>
        <p>
          The Two Way Street project is staffed and organised by volunteers and
          runs entirely on donations and fundraising. It has two donated
          vehicles which cost $3,000 a year to operate – in petrol,
          registration, insurance and servicing.
        </p>
        <p>“That is where the magic is. It’s beautiful.”</p>
        <p>
          In 2020, the AOGU awarded Linda a 110th Anniversary Grant of $3,000,
          with the funds guaranteeing the project runs for another year, by
          covering the on-road costs of its two vehicles.
        </p>
        <p>
          “I was incredibly grateful that we were able to keep going, that is
          where the money has been invaluable, it has given Two Way Street a
          whole new life.”
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

export default Pageone;
