import React from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';
import Mainnav from '../../home/nav';
const Christian = () => {
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
          <h2>Christian faith</h2>
          <br />
          <br />
          <Image src='https://www.abbotsleigh.nsw.edu.au/Images/UserUploadedImages/191/ChristianPurpose_banner.jpg'></Image>
          <br />
          <br />
          <strong>By Ella Boulton | Year 10</strong>
          <p>
            As an independent Anglican school, Abbotsleigh's understanding of
            education is underpinned by Christian teaching. The task of
            education is ultimately one of human formation. A holistic education
            provides students with the opportunity to consider their own
            response to the question, 'What does it mean to be human?' C.S Lewis
            wrote, 'God made us: invented us as a man invents an engine. A car
            is made to run on petrol, and it would not run properly on anything
            else. Now God designed the human machine to run on Himself. He
            Himself is the fuel our spirits were designed to burn, or the food
            our spirits were designed to feed on. There is no other.' C.S.
            Lewis, Mere Christianity. As we empower our students to be
            courageous, constructive and compassionate world citizens, we do so
            with the conviction that Jesus shows us who God is and what it is to
            be truly human. Students are challenged to respond to the Christian
            message as they develop their own understanding of the world.
          </p>
          <p>
            At the centre of Christian faith is the belief that Jesus reveals
            the true nature of the God who created the universe. We discover him
            today through God's word, the Bible. In Jesus, God reveals himself
            to be faithful to humans despite the fact they have turned away from
            him. The suffering that has entered our world, which is seen in both
            in war and environmental disaster and in the everyday hurts we
            inflict upon each other, are testament to this turning away and are
            at odds with God’s purpose and character. They point to brokenness
            between God and his creation and a rejection by humans of his good
            and loving order. Yet, God’s love is so powerful that he is able to
            overcome the very worst outcome of our wrong doing that we might
            live in right relationship with him.
          </p>
          <p>
            1 John 4:9-10 reads This is how God showed his love among us: he
            sent his one and only Son into the world that we might live through
            him. This is love: not that we loved God, but that he loved us and
            sent his Son as an atoning sacrifice for our sins. When Jesus rose
            from the dead at Easter it was to proclaim that there is life after
            death. Jesus came that we might know the hope of forgiveness that
            restores our relationship with God and the promise of eternal
            relationship with him. Humans are spiritual and built for a
            relationship with God and each other which is unending.
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

export default Christian;
