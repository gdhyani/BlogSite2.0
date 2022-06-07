import React from "react";
import "./BlogWriter.css";
import bat from "../../IMG/bat.png";
const BlogWriter = () => {
  return (
    <div className="writerContainer">
      <div className="container">
        <div className="row">
          <div className=" col-12 col-md-4">
            <img src={bat} alt="bat" />
          </div>
          <div className="col-12 col-md-8">
            <h2>NAME OF WRITER</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
              reication voluptate. Do cillum enim incididunt culpa.
              Id commodo sit irure anim consectetur adipisicing. Ad aliqua
              aliqua eiusmod amet id do reprehenderit. Fugiat nulla veniam
              adipisicing non irure cupidatat. Cupidata
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogWriter;
