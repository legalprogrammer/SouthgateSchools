import React, { useState } from "react";
import { data } from "./Data";
const Errorexample = () => {
  const [teachers, setTeachers] = useState(data);

  const removeitem = (id) => {
 let newteachers =   teachers.filter((singleTeacher) => singleTeacher.id !==  id);
  setTeachers(newteachers)
  };

  return (
    <React.Fragment>
      {teachers.map((teacher) => {
        const { surname, name, id } = teacher;
        return (
          <React.Fragment key={id}>
            <h3>{name + "  " + surname}</h3>
            <button className="btn" onClick={() => removeitem(id)}>
              remove item
            </button>
          </React.Fragment>
        );
      })}
            <button className="btn" onClick={() => setTeachers([])}>
              clear items
            </button>
    </React.Fragment>
  );
};

export default Errorexample;
