import React from "react";
import { newsdata } from "./data";
import { Col, Row, Container, Carousel } from "react-bootstrap";

const Footer = () => {
  const [news, setnews] = React.useState(newsdata);
  return (
    <div>
      <Container>
        <Carousel>
          {news.map((news) => {
            const { id, imgSrc, Text, title } = news;
            return (
              <Carousel.Item interval={10000} className="news" key={id}>
                <div className="news_thumb">
                  <div>
                    <img className="d-block w-60" src={imgSrc} />
                  </div>
                  <Carousel.Caption>
                    <p>
                      <h3>{title}</h3>
                      <div>{Text}</div>
                      <a href="#">
                        <button>Read more +</button>
                      </a>
                    </p>
                  </Carousel.Caption>
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </Container>
      <div className="footer">
        <Container>
          <Row>
            <Col>
              © Southgate | An Anglican Pre K-12 Day and Boarding School for
              Girls | CRICOS provider code 02270F
            </Col>
            <Col>
              <a href="#">contact</a>
              <strong>privacy</strong>
              <strong>Terms & Conditions</strong>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
