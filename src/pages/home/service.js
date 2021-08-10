import React from "react";
import { Carousel } from "react-bootstrap";
import { outline } from "./data";


const Service = () => {
  const [info, setinfo] = React.useState(outline);
  return (
    <div>
         <div>
             {info.map(info => {
                 const {title, nameid,id} = info;
                 return <button key={id} className="btn-g">
                   <a href={`#${nameid}`}>{title}</a>
                 </button>
             })}
         
         </div>
      <Carousel>
        {info.map((info) => {
          const { id, text, title, img, btnval, nameid } = info;
          return (
            <Carousel.Item interval={10000} key={id} id={nameid} >
              <div className="outline" id={nameid}>
                <div>
                  <img className="d-block w-100" src={img} alt={nameid} />
                </div>
                <Carousel.Caption id="cap">
                  <p>
                    <h3>{title}</h3>
                    <div>{text}</div>
                     <a href="/read-more"><button>{btnval}</button></a>
                  </p>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Service;
