import React from "react";
import Footer from "../home/footer";
import Mainnav from "../home/nav";
import {
  Carousel,
  Image,
  Card,
  Button,
  Col,
  Row,
  Container,
} from "react-bootstrap";
import "../enrolment/enrol.css";
import picTwo from "../pictures/pc6.jpg";
import { enrolldata, cardinfo, paflet } from "../enrolment/enrolldata";

const Enrolpage = () => {
  const [state, setstate] = React.useState(enrolldata);
  return (
    <div>
      <Mainnav />
      <container fluid id="enrol">
        <Image src={picTwo} />
      </container>
      <section className="intro enroll-head">
        <h2>How to apply</h2>
        <p>
          We look forward to helping you arrange your visit to Abbotsleigh to
          discuss your daughter's learning adventure.
        </p>
      </section>
      <div>
        <div>
          {state.map((info) => {
            const { title, nameid, id } = info;
            return (
              <button key={id} className="btn-g">
                <a href={`#${nameid}`}>{title}</a>
              </button>
            );
          })}
        </div>
        <Carousel>
          {state.map((info) => {
            const { id, text, title, img, btnval, nameid } = info;
            return (
              <Carousel.Item interval={10000} key={id} id={nameid}>
                <div className="" id="enroll-carousel">
                  <Carousel.Caption id="cap">
                    <p>
                      <h3>{title}</h3>
                      <div>{text}</div>
                      <a href="#">
                        <button>{btnval}</button>
                      </a>
                    </p>
                  </Carousel.Caption>
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>
        <div>
          <Container className="campus">
            <h1>Entrance testing</h1>
            <p>
              Year 7 new day students gain entry via an entrance test which is
              held regularly from the commencement of Year 3 onwards. The
              entrance test is held at Abbotsleigh on a Saturday morning.
            </p>
          </Container>
          <Container style={{ marginTop: "50px" }} className="enroll-card">
            <Row>
              {cardinfo.map((carditems) => {
                const { text, id, title, link, date } = carditems;
                return (
                  <Col key={id}>
                    <Card
                      style={{
                        width: "20rem",
                        marginTop: "70px",
                        backgroundColor: "#000",
                      }}
                    >
                      <Card.Body>
                        <Card.Title className="newtitle">{title}</Card.Title>
                        <br /> <br />
                        <h3 className="text">{date}</h3>
                        <br />
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
            <h1>Request a prospectus</h1>
            <p>
              We are excited to show you all that Abbotsleigh has to offer, so
              please take some time to explore our website. Our prospectus
              provides everything that you need to know about our school in a
              handy package, and we'd love to send you one that you can read at
              your leisure.
            </p>
          </Container>
          <Container className="schools" style={{ marginTop: "250px" }}>
            <Row>
              <Col>
                <img src="https://www.abbotsleigh.nsw.edu.au/Images/UserUploadedImages/178/BASC_thumb3.jpg" />
                <br />
                <br />
                <br />
                <h4>Before and After School Care</h4>
                <br />
                <p>
                  Abbotsleigh’s Before and After School Care (BASC) is a safe
                  and nurturing environment that provides care for children who
                  need supervision in the mornings and afternoons. We cater for
                  a range of families, from those with working parents to those
                  who have children involved in afternoon activities at the
                  School.
                </p>
                <br />
                <a href="">
                  <button
                    style={{
                      background: "none",
                      border: "1px solid #fdc82f",
                      padding: "7px 10px",
                      color: "white",
                      marginTop: "60px",
                    }}
                  >
                    Find out more
                  </button>
                </a>
              </Col>
              <Col>
                <img src="https://www.abbotsleigh.nsw.edu.au/Images/UserUploadedImages/178/UniformShop_thumb.jpg" />
                <br />
                <br />
                <br />
                <h4>For all junior and senior student uniform needs</h4>
                <br />
                <p>
                  The Uniform Shop is located on the Senior School campus. Term
                  opening times
                  <ul style={{ textAlign: "left", listStyle: "none" }}>
                    <li>Monday 1-4 pm</li>
                    <li> Tuesday 9.30 am -5 pm</li>
                    <li> Wednesday 9.30 am-4 pm</li>
                    <li>Thursday 9.30 am-5 pm</li>
                    <li>Friday 9.30 am-4 pm</li>
                  </ul>
                </p>
                <br />
                <a href="">
                  <button
                    style={{
                      background: "none",
                      border: "1px solid #fdc82f",
                      padding: "7px 10px",
                      color: "white",
                      marginTop: "0px",
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
              part in our events. Visit often – we don't want you to miss a
              thing.
            </p>
            <br />
            <br />
            <br />
            <br />
            <h1>News</h1>
          </Container>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Enrolpage;
