import React from "react";
import "./BlogCard.css";
const BlogCard = ({ img, text, col, ml }) => {
  return (
    <div className="blogCard">
      <div className="b-img" style={{ backgroundColor: col }}>
        <img src={img} alt="b-img" style={{ marginLeft: ml }}></img>
      </div>
      <div className="b-title">
        <h5>{text}</h5>
      </div>
    </div>
  );
};

export default BlogCard;
