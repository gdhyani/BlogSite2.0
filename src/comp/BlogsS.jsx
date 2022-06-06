import React from "react";
import "./BlogsS.css";
import adog from "../IMG/Adog.png";
import ant from "../IMG/ant.png";
import bat from "../IMG/bat.png";
import bear from "../IMG/bear.png";

import bug from "../IMG/bug.png";
import cat from "../IMG/cat.png";
import BlogCard from "./BlogCard";

const Blogs = () => {
  return (
    <div className="blog-container">
      <div className="container">
        <div className="row">
          <div className="bbox col-12 col-sm-6 col-md-4 col-lg-3">
            <BlogCard img={adog} col="#996ff4" text="title off the blog" ml="35px" />
          </div>
          <div className="bbox col-12 col-sm-6 col-md-4 col-lg-3">
            <BlogCard img={ant} col="#55c6ff" text="title off the blog" />
          </div>
          <div className="bbox col-12 col-sm-6 col-md-4 col-lg-3">
            <BlogCard img={bat} col="#03dac6" text="title off the blog"  />
          </div>
          <div className="bbox col-12 col-sm-6 col-md-4 col-lg-3">
            <BlogCard img={bear} col="#ef1870" text="title off the blog" />
          </div>
          <div className="bbox col-12 col-sm-6 col-md-4 col-lg-3">
            <BlogCard img={bug} col="#ffee4d" text="title off the blog" />
          </div>
          <div className="bbox col-12 col-sm-6 col-md-4 col-lg-3">
            <BlogCard img={cat} col="#2c324f" text="title off the blog" ml="75px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
