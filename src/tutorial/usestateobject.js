import React, { useState } from "react";

function Usestateobject() {
  const [student, setStudent] = useState({
    surname: "buhari",
    name: "segun",
    message: "i am the president son",
  });
const messagefunction = () => {
      setStudent({...student, message: "thats a lie"})
}



  return (
    <div>
      <h1>object useState</h1>
      <h3>{student.name + student.surname}</h3>
      <p>{student.message}</p>
      <button className="btn" onClick={messagefunction} >change message</button>
    </div>
  );
}

export default Usestateobject;
