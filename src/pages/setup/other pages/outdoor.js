import React from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';
import Mainnav from '../../home/nav';
const Outdoor = () => {
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
          <h2>Outdoor education</h2>
          <br />
          <br />
          <Image src='https://www.abbotsleigh.nsw.edu.au/Images/UserUploadedImages/184/OutdoorEducation3_banner.jpg'></Image>
          <br />
          <br />
          <strong>By Ella Boulton | Year 10</strong>
          <p>
            AAbbotsleigh’s outdoor education programs for Kindergarten through
            to Year 11 call extensively upon the girls to develop relationships
            with others in an environment that requires initiative, perseverance
            and adaptability. Through bushwalking, camping, high and low ropes
            courses, rock climbing, canoeing, mountain biking and navigating,
            Abbotsleigh girls are taught responsibility and the value of working
            within a challenge by choice environment.
          </p>
          <p>
            Outdoor education is a significant component of the Abbotsleigh
            curriculum and our program takes every advantage of the diversity of
            natural environments available in NSW.
          </p>
          <p>
            The program illustrates Abbotsleigh’s commitment to experiential
            learning and enhances the effectiveness of learning by providing
            situations where consequence of action has a real and timely impact
            through elements of perceived risk.
          </p>
          <p>
            The The philosophy of the program has its foundation in self
            reliance, personal growth and development through participation in
            adventurous challenges. Activities allow students to expand their
            own horizons, as well as refine social skills like cooperative and
            collaborative teamwork.
          </p>
          <p>
            Outdoor education at Abbotsleigh works to complement the academic
            and pastoral programs through the development of resilience,
            courageous leadership, interdependence and communication in each
            girl. Girls will have the opportunity to develop a sense of self,
            others and the natural world through a range of diverse experiences
            in the outdoors.
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

export default Outdoor;
