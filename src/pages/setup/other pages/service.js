import React from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';
import Mainnav from '../../home/nav';
const Service = () => {
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
          <h2>Service perspective</h2>
          <br />
          <Image src='https://www.abbotsleigh.nsw.edu.au/Images/UserUploadedImages/182/ServiceLearning_banner.jpg'></Image>
          <br />
          <br />
          <p>
            Service Learning is embedded in the School's curriculum and in
            special programs such as our Year 10 Applied Learning Experience.
            Students apply their classroom knowledge to the planning and
            implementation of service activities. The experiential nature of
            these activities encourages the learner to make cross-curricular
            connections; strengthening her skills and understanding while
            building relationships with her peers, staff and community partners.
          </p>
          <p>
            Service Learning is the reciprocal relationship between the giving
            of time and energy to improve a situation and the learning that is
            captured by that experience. It provides an opportunity to think
            critically and creatively as students work with each other and
            community partners. Reflection activities help to measure students’
            understanding, allowing them a chance to share their feelings, grow
            spiritually, internalise new concepts and evaluate the impact of the
            activities. The learning is planned and through hands-on experience
            embeds itself deeply in the recipient and provokes reflection and
            further action.
          </p>

          <p>
            Service Learning activities allow our students to be courageous,
            constructive and compassionate world citizen with a will to serve.
            To this end, the Kindergarten to Year 12 Service-Learning program
            links specific learning outcomes with genuine opportunities for
            service in the community.
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

export default Service;
