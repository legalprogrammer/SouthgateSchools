import React from "react";
import { Link } from "react-router-dom";
import Mainnav from "../home/nav";
import { Button } from "react-bootstrap";
const Error = () => {
  return (
    <div>
      <Mainnav />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1 className="error">Error 404</h1>
      <h1 className="error">This site is currently under maintenance , check back later</h1>
      <br />
      <br />

      <Link to="/">
        <Button className="btn-g">back home</Button>
      </Link>
    </div>
  );
};

export default Error;
