import React from "react";
import Mainnav from "../home/nav";
import { Container, Image} from "react-bootstrap";
const Abroadstudents = () => {

  return (
    <div>
      <Mainnav />
      <Container fluid id="enrol" style={{opacity:0.2}}>
        <Image
          alt="image"
          src="https://www.abbotsleigh.nsw.edu.au/Images/UserUploadedImages/178/InternationalStudents_banner.jpg"
        />
      </Container>
      <div className="music">
        <Container className="last">
          <h1>Overseas students</h1>
          <div >
            Southgate is registered to accept overseas students for a limited
            number of places. The School does not deal with agencies, or pay
            referral fees, for the recruitment of students. Overseas students
            may study at Abbotsleigh on a student visa.
          </div>
          <div>
            Students whose first language is not English will be required to
            provide documentary evidence of their English proficiency.
          </div>
          <div>
            Overseas student enrolments, whether day or boarding girls, are
            normally placed on the waiting list until the year preceding entry.
            The School will require an interview with the parents and student
            before an accepted place is offered. The interview process can be
            arranged through Skype if necessary.
          </div>
          <div>
            Overseas students are required to pay an advance payment
            approximating their first installment of tuition fees, and boarding
            school fees if relevant. They are also required to pay overseas
            medical cover and any government levied examination fees.
          </div>
          <div>
            Overseas students attending Abbotsleigh must live in the Abbotsleigh
            boarding residences or with their parents in suburban Sydney.
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Abroadstudents;
