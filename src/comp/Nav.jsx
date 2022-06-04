import React from "react";
import "./Nav.css";
const Nav = () => {
  return (
    <div className="nav-container">
      <a href="/" className="nav-brand">
        <i class="fa-solid fa-kiwi-bird"></i>
      </a>
      <div className="nav-links">
          <a href="#">Read</a>
          <a href="#">About</a>
      </div>
    </div>
  );
};

export default Nav;
