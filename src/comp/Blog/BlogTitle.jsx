import React from "react";
import bat1 from "../../IMG/bat.png";
import "./BlogTitle.css";
const BlogTitle = ({ col, img, title }) => {
  return (
    <div className="BlogTitleContainer" style={{ backgroundColor: col }}>
      <img src={bat1} alt="img" />
      <h1>{title}</h1>
      <div className="time">
        <h6>September 23, 2021</h6>
        <i class="fa-solid fa-feather-pointed"></i>
        <h6>5 Minutes</h6>
      </div>
    </div>
  );
};

export default BlogTitle;
