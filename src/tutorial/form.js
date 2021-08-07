import React from "react";

const Form = () => {
  const [fname, setfname] = React.useState("");
  const [email, setemail] = React.useState("");
  const [people, setpeople] = React.useState([]);
  
  const handler = (e) => {
    e.preventDefault();
    console.log(fname,email)
    if ( fname && email ) {
          const person = {fname,email}
          setpeople((people) => {
              return [...people,person]
          })
          setemail('')
          setfname('')
    }else{
         console.log('empty cells')
    }
  };

  return (
    <div>
      <form className="form" onSubmit={handler}>
        <div>
          <label htmlFor="fname">Name:</label>
          <input
            type="text"
            value={fname}
            id="fname"
            onChange={(e) => setfname(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            value={email}
            id="email"
            onChange={(e) => setemail(e.target.value)}
          />
        </div>
        <br />
        <div>
          <input type="submit" value="submit" id="submit" />
        </div>
      </form>
    </div>
  );
};

export default Form;
