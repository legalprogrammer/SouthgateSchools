import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Mainnav from "../home/nav";
import ctwo from "../pictures/c2.jpg";
const Apply = () => {
  return (
    <div className="music">
      <Mainnav />
      <div>
        <img src={ctwo} alt="topimg"></img>
      </div>
      <Container className="topOne">
        <h1>Application for enrolment</h1>
        <p>
          Our aim is to make the enrolment process as smooth as possible for
          you. Please complete and return the application for enrolment form
          below, which can be submitted either online or in hard copy.
        </p>
      </Container>
      <Container className="topTwo">
        <h1>What else do I need to provide?</h1>
        <ul>
          <li>A copy of your daughter’s full birth certificate</li>
          <li>
            A copy of your daughter's latest school report if she is of school
            age
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
            A copy of your daughter's Australian citizenship certificate, if
            applicable
          </li>
        </ul>
        <div>
          Note: An English proficiency test may be required for students whose
          first language is not English, particularly those applying from
          overseas.
          <br />
          <br />
          Please ensure that you use either Microsoft Edge or Chrome to open the
          online application form below.
        </div>
        <br />
        <br />
        <br />
        <Link to="/application-form" target="_blank">
          <Button className="formlink">
            Purchase Application for enrolment
          </Button>
        </Link>
        <br />
        <br />
        <span>The form costs $370:00 </span>
      </Container>
      <Container className="last">
        <h1>Any questions?</h1>
        <div>
          Please don't hesitate to contact the Registrar if you need any help
          with the application process.
        </div>
      </Container>
    </div>
  );
};

export default Apply;
