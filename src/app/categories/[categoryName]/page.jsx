import React from "react";
import { POSTS_URL } from "@/app/config";
import { getPostsByCategory } from "@/app/services/posts";
import PostGrid from "../../../../components/PostsGrid";

const category = async ({ params }) => {
  const category = params.categoryName;
  const posts = await getPostsByCategory(params.categoryName);
  return (
    <>
      <h4>{category}</h4>
      <PostGrid postsByCategory={posts} />
    </>
  );
};

export default category;
