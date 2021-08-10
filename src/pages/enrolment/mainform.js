import React from "react";
import logo from "../pictures/logoR.png";
import { Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
const Mainform = () => {
  return (
    <div className="mainform">
      <Container fluid className="section">
        <Container>
          <img src={logo} alt="logo" />
          <Link to="/" className="logoname">
            Southgate Schools
          </Link>
          <br />
          <br />
          <h2>Southgate Application For Enrolment</h2>
          <br />
          <br />
          <h5>
            Thank you for your interest in enrolling your child at our school.
            Please follow the steps below to complete your application.
          </h5>
          <h5>
            This application form allows families to enrol online and pay via
            credit card. A non-refundable fee of $370.00 will be charged per
            enrolment.
          </h5>
          <br />
          <br />
          <Button>Start Application</Button>
          <Button id="continue">Continue with your Application</Button>
        </Container>
      </Container>
      <div className="music requirements">
        <Container className="topTwo">
          <h4>
            To complete your application, please ensure you have the following
            available:
          </h4>
          <ul>
            <li>A copy of your child full birth certificate</li>
            <li>
              A copy of your child latest school report if she is of school age
            </li>
            <li>
              Test results if relevant to age (e.g. NAPLAN for Years 3, 5, 7 and
              9)
            </li>
            <li>
              The name, address and telephone number of two referees who can be
              contacted
            </li>
            <li>
              A copy of your child Australian citizenship certificate, if
              applicable
            </li>
          </ul>
          <br />
          <Button>Start Application</Button>
          <Button id="continue">Continue with your Application</Button>
        </Container>
      </div>
    </div>
  );
};

export default Mainform;
