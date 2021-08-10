import React from 'react';
import Logo from '../pictures/logoR.png';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
const Mainnav = () => {
  React.useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand='lg'
        variant='dark'
        className='nav'
        data-aos='fade-down'
        sticky="top"
      >
        <Container fluid>
          <Navbar.Brand href='#home'>
            <img src={Logo} alt='logo' className='logo' />
            <Link to='/' className='name'>
              Southgate Schools
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls='responsive-navbar-nav'
            className='navbtn'
          />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='/how-to-apply'>Admission</Nav.Link>
              <NavDropdown
                title='Enrolment'
                id='collasible-nav-dropdown'
                className='droplinks'
              >
                <NavDropdown.Item href='/enrolpage' className='V_link'>
                  <Link to='/enrolpage' id='links'>
                    Enrol
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href='/how-to-apply' className='V_link'>
                  <Link to='/how-to-apply' id='links'>
                    How to apply
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href='/scholarship' className='V_link'>
                  Scholarships
                </NavDropdown.Item>
                <NavDropdown.Item href='/abroad-students' className='V_link'>
                  Oversees students
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  href='mailto:southgate@gmail.com'
                  className='V_link'
                >
                  Contact the Registrar
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title='Student life & learning'
                id='collasible-nav-dropdown'
                className='droplinks'
              >
                <NavDropdown.Item href='/easy' className='V_link'>
                  <Link to='/easy' id='links'>
                    Easy Learning
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href='/Junior' className='V_link'>
                  <Link to='/Junior' id='links'>
                    Junior School(1-6)
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href='/mid' className='V_link'>
                  <Link to='/mid' id='links'>
                    Middle School(7-8)
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href='/Senior' className='V_link'>
                  <Link to='/Senior' id='links'>
                    Senior College(9-12)
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href='/boarding' className='V_link'>
                  <Link to='/boarding' id='links'>
                    Boarding
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href='/student-life' className='V_link'>
                  <Link to='/student-life' id='links'>
                    Student life
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href='/boarding'>boarding</Nav.Link>
              <Nav.Link href='/contact'>Contact us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Mainnav;
