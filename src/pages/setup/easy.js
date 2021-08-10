import React from "react";
import Mainnav from "../home/nav";
import Footer from "../home/footer"
import { Container, Row, Col,Image } from "react-bootstrap";
const Easy = () => {
  return (
    <div>
      <Mainnav />
      <Container fluid id="enrol" >
        <Image  alt="image" src="https://www.abbotsleigh.nsw.edu.au/Images/UserUploadedImages/217/ELC_CheeringGirl_banner.jpg" />
      </Container>
      <Container className="campus enroll-head" style={{ marginTop: "400px" }}>
        <h1>EARLY LEARNING</h1>
        <p>
          Our Early Learning Centre caters for boys and girls up to five years
          of age, while our Transition class is specially designed for girls
          aged four. Both the ELC and Transition class are based on the Woonona
          Avenue campus.
        </p>
      </Container>
      <Container className="schools" style={{ marginTop: "250px" }}>
        <Row>
          <Col>
            <h4>Early Learning Centre</h4>
            <br />
            <img alt="image" src="https://www.abbotsleigh.nsw.edu.au/Images/UserUploadedImages/217/ELCballboy_thumb.jpg" />
            <br />
            <br />
            <br />
            <p>
              Our aim is to foster the curiosity and creativity of each child
              through fun, stimulating programs where children can play with
              ideas, ask questions, be involved in problem solving and actively
              engage in experiences.
            </p>
            <br />
            <a href="">
              <button
                style={{
                  background: "none",
                  border: "1px solid #fdc82f",
                  padding: "7px 10px",
                  color: "#fdc82f",
                  marginTop: "0px",
                }}
              >
                Find out more
              </button>
            </a>
          </Col>
          <Col>
            <h4>Transition</h4>
            <br />
            <img alt="image" src="https://www.abbotsleigh.nsw.edu.au/Images/UserUploadedImages/217/Transition1_thumb.jpg" />
            <br />
            <br />
            <br />
            <p>
              Our Transition program for girls recognises the importance of the
              formative years in children’s development. We strive to create a
              balance between guided investigations initiated by each child’s
              interests and questions.
            </p>
            <br />
            <a href="">
              <button
                style={{
                  background: "none",
                  border: "1px solid #fdc82f",
                  padding: "7px 10px",
                  color: "#fdc82f",
                  marginTop: "0px",
                }}
              >
                Find out more
              </button>
            </a>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </div>
  );
};

export default Easy;
