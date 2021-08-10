import React from 'react';
import { data } from './data';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
const Category = () => {
  const [list, setlist] = React.useState(data);
  React.useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <div className='category' data-aos='fade-up'>
        {list.map((listp) => {
          const { text, img, id, nameid, age, links } = listp;
          return (
           
            <Link key={id} className='thumb' id={nameid} to={links}>
             <div>
              <Link to={links} id='links'>
                <div>
                  <img src={img} alt='p' />
                </div>
                <hr className='lines' />
                <strong>{text}</strong>
                <hr className='lines' />
                <h6>{age}</h6>
              </Link>
              </div>
            </Link>
          );
        })}
      </div>
      <section className='intro' data-aos='fade-up'>
        <h2>A warm welcome</h2>
        <p>
          Welcome to Southgate, a Pre Kindergarten to Year 12 Anglican day and
          boarding school for children located in Wahroonga, on Sydney’s North
          Shore. Our sixth Headmistress Miss Betty Archdale said, ‘With
          education, we can do or be anything’. We always have, and always will,
          champion equality for all
        </p>
      </section>
    </div>
  );
};

export default Category;
