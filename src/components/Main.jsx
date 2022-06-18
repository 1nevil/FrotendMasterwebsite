import React from "react";
import "./css/main.css";
import vrman from "./asset/desktop/image-interactive.jpg";

function Main() {
  return (
    <div className="main_Container">
      <div className="main_image">
        <img src={vrman} alt="VR Image" loading="lazy" />
      </div>
      <div className="main_text">
        <h2>The Leader in interactive vr</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nobis
          repellat assumenda, dicta, quae alias sed magnam nemo tempore,
          aperiam.
        </p>
      </div>
    </div>
  );
}

export default Main;
