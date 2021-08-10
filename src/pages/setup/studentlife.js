import React from "react";
import Mainnav from "../home/nav";
import Topslider from "../home/topslider";
import { Link } from "react-router-dom";
import { data } from "../home/data";
import { cardinfo } from "../studentlife/data";
import { Container, Row, Card, Col, Button } from "react-bootstrap";
import Footer from "../home/footer";

const Studentlife = () => {
  const [list, setlist] = React.useState(data);
  return (
    <div>
      <Mainnav />
      <Topslider />
      <div>
        <div className="category">
          {list.map((listp) => {
            const { text, img, id, nameid, age, links } = listp;
            return (
              <div key={id} className="thumb" id={nameid}>
                <Link to={links} id="links">
                  <div>
                    <img src={img} alt="image" />
                  </div>
                  <hr className="lines" />
                  <strong>{text}</strong>
                  <hr className="lines" />
                  <h6>{age}</h6>
                </Link>
              </div>
            );
          })}
        </div>
        <section className="intro" id="curricular">
          <h2>Co-curricular</h2>
          <p>
            A wide range of co-curricular programs is open to students to
            complement the School's holistic learning opportunities. The School
            encourages excellence in sporting, music and performing arts arenas,
            and promotes the values of working together and being respectful of
            others. Students develop initiative and enhance their leadership
            skills through Abbotsleigh's Duke of Edinburgh program, debating and
            public speaking, and involvement in co-curricular clubs. Girls can
            also opt to take extended tuition classes via AbbSchool programs.
          </p>
        </section>
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
                    <Card.Img variant="top" src={pic} alt="image" />
                    <Card.Body>
                      <Card.Title>{title}</Card.Title>
                      <br /> <br />
                      <Card.Text className="text">{text}</Card.Text>
                      <br />
                      <Link to={link}>
                        
                        <Button>READ MORE +</Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
        <Footer />
      </div>
    </div>
  );
};

export default Studentlife;
