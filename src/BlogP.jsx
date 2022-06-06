import React from "react";
import { useParams } from "react-router-dom";
import BlogTitle from "./comp/Blog/BlogTitle";


const BlogP = ({ name }) => {
  let { blogID } = useParams();
  return (
    <div>
      <BlogTitle col="pink" title="title1 of the  name and then the title" />
    </div>
  );
};

export default BlogP;
