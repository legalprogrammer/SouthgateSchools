import React from 'react';
import { Container, Image } from 'react-bootstrap';
import Footer from '../home/footer';
import Mainnav from '../home/nav';

const Contact = () => {
  return (
    <div>
      <Mainnav />
      <Container>
        <Image src='https://www.abbotsleigh.nsw.edu.au/images/UserUploadedImages/11/sub_banner_1.jpg' />
        <div className='contact'>
          <h3 className='contact-title'>Where is Souhgate?</h3>
          <p className='details'>
            22 Woonona Ave 22 Woonona Ave, Wahroonga NSW 2076
          </p>
          <h3 className='contact-title'>Hotlines</h3>
          <p className='details'>+61 2 9473 7700</p>
          <p className='details'>+61 2 9473 7777</p>
          <p className='details'>+61 2 9934 3323</p>
          <p className='details'>+61 2 9473 7744</p>
          <p className='details'>+61 2 9473 7748</p>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Contact;
