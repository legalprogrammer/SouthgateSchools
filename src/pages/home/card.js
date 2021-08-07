import React from "react";
import { cardinfo } from "./data";
import { paflet } from "./data";
import  { newsdata } from "./data"
import { Card, Button, Col, Row, Container, Carousel } from "react-bootstrap";



const Cardlinks = () => {
  const [news, setnews] = React.useState(newsdata);

  return (
    <div>
      <Container className="campus">
        <h1>Our key points of difference</h1>
        <p>
          Southgate’s holistic education, underpinned by the Christian faith,
          helps our girls thrive today and tomorrow. We empower amazing girls to
          do amazing things. We invite you to explore …
        </p>
      </Container>
      <Container style={{ marginTop: "50px" }}>
        <Row>
          {cardinfo.map((carditems) => {
            const { text, id, title, link, pic } = carditems;
            return (
              <Col key={id}>
                <Card
                  style={{
                    width: "20rem",
                    marginTop: "70px",
                    backgroundColor: "#000",
                  }}
                >
                  <Card.Img variant="top" src={pic} />
                  <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <br /> <br />
                    <Card.Text className="text">{text}</Card.Text>
                    <br />
                    <a href={link}>
                      {" "}
                      <Button>READ MORE +</Button>
                    </a>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
      <div>
        <Row className="paflet">
          {paflet.map((paflet) => {
            const { id, img, link } = paflet;
            return (
              <Col key={id}>
                <a href={link}>
                  <img src={img} />
                </a>
              </Col>
            );
          })}
        </Row>
      </div>
      <Container className="campus">
        <h1>Our campuses</h1>
        <p>
          Abbotsleigh is situated across two campuses on 15 tree studded
          hectares in Wahroonga. Both Anglican campuses are located just a few
          minutes’ walk from Wahroonga train station; the Junior School is in
          Woonona Avenue and the Senior School is on the corner of the Pacific
          Highway and Ada Avenue.
        </p>
      </Container>
      <Container className="schools" style={{ marginTop: "250px" }}>
        <Row>
          <Col>
            <img src="https://www.abbotsleigh.nsw.edu.au/Images/UserUploadedImages/191/JS_campus_thumb.jpg" />
            <br />
            <br />
            <br />
            <h4>The Junior School campus</h4>
            <p>
              The Junior School offers bright, technology rich, adaptable
              classrooms and learning spaces for children T-6
            </p>
            <br />
            <a href="">
              <button
                style={{
                  backgroundColor: "#fdc82f",
                  border: "none",
                  padding: "7px 10px",
                }}
              >
                Find out more
              </button>
            </a>
          </Col>
          <Col>
            <img src="https://www.abbotsleigh.nsw.edu.au/Images/UserUploadedImages/191/SS_campus_thumb.jpg" />
            <br />
            <br />
            <br />
            <h4>The Senior School campus</h4>
            <p>
              Beyond the classroom, the Anglican Senior School provides amazing
              spaces for sport, music, dance and the visual arts
            </p>
            <br />
            <a href="">
              <button
                style={{
                  backgroundColor: "#fdc82f",
                  border: "none",
                  padding: "7px 10px",
                }}
              >
                Find out more
              </button>
            </a>
          </Col>
        </Row>
      </Container>
      <Container className="campus">
        <h1>News and events</h1>
        <p>
          Southgate is a vibrant and busy place. Our news and events section
          keeps you up to date with what's going on. Share in our joys. Take
          part in our events. Visit often – we don't want you to miss a thing.
        </p>
        <br />
        <br />
        <br />
        <br />
        <h1>News</h1>
      </Container>
    </div>
  );
};

export default Cardlinks;
