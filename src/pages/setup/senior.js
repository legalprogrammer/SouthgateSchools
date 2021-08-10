import React from "react";
import Mainnav from "../home/nav";
import { Container, Image,Carousel } from "react-bootstrap";
import picTwo from "../pictures/p6.jpg";
import { data } from "../junior/data";
import Footer from "../home/footer";
const Senior = () => {
  const [state, setstate] = React.useState(data)
  return (
    <div>
      <Mainnav />
      <Container fluid id="enrol">
            <Image src={picTwo} id="fade" alt="image"/>
      </Container>
      <Container className="campus enrollhead" id="midhead">
        <h1>Senior SCHOOL</h1>
        <p>
          When young children start school, they bring an innate sense of
          curiosity, wonder and excitement. These powerful attributes, when
          complemented with our educational programs and facilities, allow each
          student to achieve remarkable outcomes.
        </p>
      </Container>
      <Carousel id="carouselmiddle">
          {state.map((info) => {
            const { id, text, title, btnval, nameid } = info;
            return (
              <Carousel.Item interval={10000} key={id} id={nameid}>
                <div className="" id="enrollcarousel">
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
        <br/>
        <Footer/>
    </div>
  );
};

export default Senior;
