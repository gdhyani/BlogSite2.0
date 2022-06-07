import React from "react";
import "./BlogForm.css";
const BlogForm = () => {
  return (
    <div className="BlogForm">
      <h3>Leave a Reply</h3>
      <p>Your email address will not be published. Required fields are marked * </p>
      <span>Comment *</span>
      <textarea rows='8'></textarea>
      <span>Name *</span>
      <input type="text" autoComplete="off"></input>

      <span>Email *</span>

      <input type="text" autoComplete="off"></input>

      <span>Website</span>

      <input type="text" autoComplete="off"></input>
      <br></br>
      <input className="checkbox" type="checkbox"></input>
      <span>Save my name, email, and website in this browser for the next time I comment.</span>
      <button>POST COMMENT</button>
    </div>
  );
};

export default BlogForm;
