import React from "react";
import { POSTS_URL } from "@/app/config";
import { getPostsByCategory } from "@/app/services/posts";
import PostGrid from "../../../../components/PostsGrid";
import { Container } from "react-bootstrap";

const category = async ({ params }) => {
  const category = params.categoryName;
  const posts = await getPostsByCategory(category);
  return (
    <Container className="d-flex flex-column align-items-center my-5">
      <h4>{category}</h4>
      <PostGrid posts={posts} />
    </Container>
  );
};

export default category;
