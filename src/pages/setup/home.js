import React from "react";
import Cardlinks from "../home/card";
import Category from "../home/category";
import Footer from "../home/footer";
import Mainnav from "../home/nav";
import Service from "../home/service";
import Topslider from "../home/topslider";

const Home = () => {
  return (
    <div>
      <Mainnav />
      <Topslider />
      <Category />
      <Service/>
      <Cardlinks/>
      <Footer/>
    </div>
  );
};

export default Home;
