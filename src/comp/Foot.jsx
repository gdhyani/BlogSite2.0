import React from "react";
import "./Foot.css";
const Foot = () => {
  return (
    <div className="foot-container">
      <div className="container">
        <div className="row">
          <div className="fbox col-md-12 col-lg-6 footb ">
            <h5>This Is</h5>
            <h1>ROCK BOTTOM</h1>
            <h5>There's Nowhere To Go But Up.</h5>
            <i class="fa-solid fa-cat"></i>
          </div>
          <div className="fbox  col-6 col-md-4 col-lg-3 ">
            <h3>DO STUFF</h3>
            <h5>Read The Blog</h5>
            <h5>Report A Bug</h5>
          </div>
          <div className="fbox  col-6 col-md-4  col-lg-3">
            <h3>KNOW THINGS</h3>
            <h5>Terms Of Use</h5>
            <h5>Privacy Policy</h5>
          </div>
          <div className="fbox col-md-4  col-lg-2">
            <h3>CONNECT</h3>
            <div className="fsocial">
              <a href="/">
                <i class=" fa fa-solid fa-at"></i>
              </a>
              <a href="/">
                <i class="fa fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foot;
