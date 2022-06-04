import React from "react";
import dog from "../IMG/dog.png";
import "./Main.css";
const Main = () => {
  return (
    <div>
      <div className="main">
        <div className="heading">
          <img alt="dog" src={dog}></img>
          <div className="title">
              <h4>My Best Article Yet!</h4>
              <h1>IS YOUR PERFECTIONISM HOLDING YOU BACK?</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
