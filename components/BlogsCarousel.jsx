import React from "react";
import PostCard from "../components/PostCard";

const BlogsCarousel = ({ blogs }) => {
  return (
    <div>
      {blogs.data.map((blog) => {
        console.log("BLOOOOG", blog);
        return <PostCard post={blog} />;
      })}
    </div>
  );
};

export default BlogsCarousel;
