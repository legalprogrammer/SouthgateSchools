import React from 'react';
import { Container, Button, Image } from 'react-bootstrap';
import Mainnav from '../home/nav';
import Footer from '../home/footer';
import Aos from 'aos';
import "aos/dist/aos.css"
const Scholarship = () => {
  React.useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <Mainnav />
      <div className='music'>
        <Container className='topOne'>
          <h1>Scholarships</h1>
          <p>
            To acknowledge and encourage excellence, Abbotsleigh offers a number
            of scholarships to day and boarding students in Years 7, 10 and 11.
            Criteria such as school reports, examination results, financial
            need, personal interview and in the case of music scholarships,
            performance, are used to award scholarships.
          </p>
        </Container>
        <Container className='topOne' >
          <h1>Scholarship registration – September 2021</h1>
          <p>
            A scholarship exam will be held on Saturday 4 September 2021 from
            8.30 am to 12.30 pm for Year 5 girls wishing to apply for a
            scholarship to enter Year 7 in 2023. Online registration is now
            open.
            <br />
            <br />
            <Button className='btn-g'>Register Now !</Button>
          </p>
        </Container>
        <Container className='topOne' data-aos="fade-up">
          <h1>Year 7 scholarships</h1>
          <p>
            southgate offers the following scholarships which begin in Year 7
            and offer up to 100% remission of tuition fees. Applicants for these
            scholarships must complete the scholarship examination in September.
          </p>
          <p>
            Open Academic Scholarship Abbotsleigh offers two academic
            scholarships, providing up to 100% remission of school tuition fees
            for the remainder of schooling.
          </p>
          <p>
            Betty Archdale Scholarship This is a needs based academic
            scholarship, providing up to 100% remission of school tuition fees
            for the remainder of schooling.
          </p>
          <p>
            Jubilee Scholarship This academic scholarship is for the daughter of
            an Abbotsleigh Old Girl. It provides up to 100% remission of school
            tuition fees from Year 7 for the remainder of schooling.
          </p>
          <p>
            Mollie and Nancy Douglas Scholarship This is a needs based academic
            scholarship, providing up to 100% remission of school tuition fees
            for the remainder of schooling. This biennial scholarship will next
            be assessed for girls wishing to commence in Year 7 2024.
          </p>
          <p>
            Indigenous Scholarships Indigenous students from rural and remote
            locations may apply for Year 7 boarding scholarships. These
            scholarships are provided in partnership with the Yalari
            organisation. Indigenous scholarships are needs based scholarships
            providing up 100% remission of school tuition fees and up to 100%
            remission of boarding school fees for the remainder of schooling.
            Applications close on 30 April the year the student is in Year 6.
          </p>
        </Container>
        <Container className='topOne' data-aos="fade-up">
          <h1>Year 7-11 scholarships</h1>
          <p>
            Endeavour Performance Scholarship The recipient of the Endeavour
            Performance Scholarship is a student who will add to the life of the
            School. All round excellence will benchmark this student. Typically
            this student will be a high achiever, whether it be in a sporting,
            dramatic, musical or public speaking field.
          </p>
          <p>
            This is a unique scholarship for a student entering the school at
            any point from Year 7 to Year 11 and provides partial remission of
            up to 50% of school tuition fees for the remainder of school years.
          </p>
          <p>
            The selection process is by way of application including a personal
            summary demonstrating ability by way of a list of achievements in
            sport or other performance category. The personal summary should
            include two reference letters supporting the candidate’s chosen
            activity. The latest school report and NAPLAN test results will
            complete this application. Following this, an interview will be
            arranged with the Headmistress together with either the Head of
            Sport, Head of Visual Arts or Head of Drama. Applications are now
            open for entry in 2023.
          </p>
        </Container>
        <Container className='topOne' data-aos="fade-up">
          <h1>Year 10 scholarships</h1>
          <p>
            Foundation Scholarships Open to new and current students entering
            Year 10. Foundation Scholarships are needs-based academic
            scholarships providing up to 50% remission of school tuition fees
            for the remainder of schooling.
          </p>
          <p>
            The selection process is by way of application. Applications have
            now closed for Year 10 2022.
          </p>
          <p>
            The Kathleen McCredie Award The Kathleen McCredie Award is awarded
            to enable a girl entering Year 10, who but for the award, would not
            be able to attend Abbotsleigh. This award is governed by strict
            financial criteria. The recipient will demonstrate all round
            involvement in the areas of spirituality, service, culture, sport
            and academia.
          </p>
          <p>
            Everett Scholarship The Everett Scholarship is awarded to one
            current Abbotsleigh student moving from Year 9 to Year 10. The
            selection process is by way of application. The Everett Scholarship
            provides 50% remission of tuition fees in Year 10. Online
            applications open in September 2021 with a closing date of Friday 22
            October 2021.
          </p>
        </Container>
        <Container className='topOne' data-aos="fade-up">
          <h1>Year 10 and 11 scholarships</h1>
          <p>
            The Royle Scholarship The Royle Scholarship is for Year 10 or Year
            11 and is open to any student in Year 9 or Year 10 (including
            current Abbotsleigh students) with particular Old Girl affiliations.
          </p>
          <p>
            This biennial scholarship is an academic and/or general merit
            scholarship providing up to 50% remission of school tuition fees for
            the remainder of schooling. Needs-based criteria may also apply. It
            is awarded to a girl joining the Senior College in either Year 10 or
            Year 11 who is the daughter, granddaughter or great granddaughter of
            an Abbotsleigh Old Girl.
          </p>
          <p>
            The selection process is by way of application. This scholarship
            will next be assessed in 2022 for a Year 10 2023 start.
          </p>
        </Container>
        <Container className='topOne' data-aos="fade-up">
          <h1>Year 11 scholarships</h1>
          <p>
            Centenary Scholarship The Centenary Scholarship is open only to
            current Year 11 Abbotsleigh students. It is awarded to the daughter
            of an Abbotsleigh Old Girl for all round participation and
            achievement. The scholarship provides 25% remission of school
            tuition fees for the remainder of schooling. The assessment process
            takes place in May each year.
          </p>
        </Container>
        <Container className='topOne'data-aos="fade-up">
          <h1>Want to know more </h1>
          <p>
            For more information about all scholarships on offer, please email
            the Registrar, Mrs Colleen Fenn, or call Colleen on +61 2 9473 7744.
          </p>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Scholarship;
