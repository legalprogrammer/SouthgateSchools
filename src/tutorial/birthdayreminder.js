import React, { useState } from "react";
import { birthdays } from "./dates";
const Birthdayreminder = () => {
  const [celebrants, setcelebrants] = useState(birthdays);
  return (
    <React.Fragment>
      <div>
         <button className="btn" onClick={() => {
             setcelebrants([])
         }} >clear all</button>
        {celebrants.map((celebrant) => {
          const { id, name, age, img } = celebrant;
          return (
            <React.Fragment key={id}>
              <div className="person">
                <div>
                  <img src={img} alt="profile pic" className="img"></img>
                </div>
                <div>
                  <h5>{name.toUpperCase()}</h5>
                  <h6>{age}</h6>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Birthdayreminder;
