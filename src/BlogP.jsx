import React from "react";
import { useParams } from "react-router-dom";
import BlogForm from "./comp/Blog/BlogForm";
import BlogMain from "./comp/Blog/BlogMain";
import BlogPS from "./comp/Blog/BlogPS";
import BlogWriter from "./comp/Blog/BlogWriter";


const BlogP = ({ name }) => {
  let { blogID } = useParams();
  return (
    <div>
      <BlogMain col="#03dac6" title="title1 of the  name and then the title" />
      <BlogPS />
      
    </div>
  );
};

export default BlogP;
