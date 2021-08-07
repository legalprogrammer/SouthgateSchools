import React, { useState } from "react";

const Shortcircuit = () => {
  const [value, setvalue] = useState("k1");
  const [error, seterror] = useState(false);
  return (
    <div>
      <h2>{value}</h2>
      {error === true ? (
        <p> There is an error</p>
      ) : (
        <span>there is no error</span>
      )}{" "}
      <br />
      <button
        className="btn"
        onClick={() => {
          seterror(!error);
        }}
      >
        toggle{" "}
      </button>
    </div>
  );
};

export default Shortcircuit;
