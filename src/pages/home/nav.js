import React from "react";
import Logo from "../pictures/logoR.png";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const Mainnav = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" variant="dark" className="nav">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img src={Logo} alt="logo" className="logo" />
            <Link to="/" className="name">
              Southgate Schools
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown
                title="Enrolment"
                id="collasible-nav-dropdown"
                className="droplinks"
              >
                <NavDropdown.Item href="#action/3.1" className="V_link">
                  <Link to="/enrolpage" className="links">Enrol</Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1" className="V_link">
                  How to apply
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" className="V_link">
                  <Link t0="">Entrance testing</Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" className="V_link">
                  Scholarships
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" className="V_link">
                  Southgate bus
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" className="V_link">
                  Visit us
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" className="V_link">
                  Oversees students
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4" className="V_link">
                  Contact the Registrar
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Student life & learning"
                id="collasible-nav-dropdown"
                className="droplinks"
              >
                <NavDropdown.Item href="#action/3.1" className="V_link">
                  <Link to="/easy" id="links">Easy Learning</Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" className="V_link">
                  <Link to="/Junior" id="links">Junior School(1-6)</Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" className="V_link">
                  <Link to="/mid" id="links">Middle School(7-8)</Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" className="V_link">
                  <Link to="/Senior" id="links">Senior College(9-12)</Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" className="V_link">
                  <Link to="/boarding" id="links">Boarding</Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" className="V_link">
                  Student Life
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="">Community</Nav.Link>
              <NavDropdown
                title="Giving"
                id="collasible-nav-dropdown"
                className="droplinks"
              >
                <NavDropdown.Item href="#action/3.1">
                  Donate Now !
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="">Contact us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Mainnav;
