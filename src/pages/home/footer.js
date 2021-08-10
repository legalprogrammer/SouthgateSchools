import React from "react";
import { newsdata } from "./data";
import { Col, Row, Container, Carousel } from "react-bootstrap"
import { Link } from "react-router-dom";
const Footer = () => {
  const [news, setnews] = React.useState(newsdata);
  return (
    <div>
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
      <Container>
        <Carousel>
          {news.map((news) => {
            const { id, imgSrc, Text, title,link } = news;
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
                      <Link to={link}>
                        <button>Read more +</button>
                      </Link>
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
