import React, { useState, useEffect } from "react";
import "./css/card.css";
import data from "./cardObj";

const Card = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    handleWindowSizeChange();
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  // console.log(width);
  return (
    <>
      <div className="card_section">
        <div className="card_nav">
          <h2 className="card_header">OUR CREATION</h2>
          <button className="card_button">SEE ALL</button>
        </div>
        <div className="img_card">
          {data.map((value, key) => (
            <div key={key} className="imgbox">
              <img
                src={width < 700 ? value.imageMob : value.imageDesk}
                alt="images"
                className="image"
              />
              <h3 className="imgbox_header">{value.text}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;
