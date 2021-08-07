import React from "react";
import { data } from "./data";
import { Link } from "react-router-dom";

const Category = () => {
  const [list, setlist] = React.useState(data);

  return (
    <div>
      <div className="category">
        {list.map((listp) => {
          const { text, img, id, nameid, age, links } = listp;
          return (
            <div key={id} className="thumb" id={nameid}>
              <Link to={links}>
                <div>
                  <img src={img} alt="p" />
                </div>
                <hr className="lines" />
                <strong>{text}</strong>
                <hr className="lines" />
                <h6>{age}</h6>
              </Link>
            </div>
          );
        })}
      </div>
      <section className="intro">
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
