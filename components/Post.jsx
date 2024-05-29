"use client";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { API_URL } from "@/app/config";
import { getSInglePost, getPostsByCategory } from "@/app/services/posts";
import Grid from "../components/PostsGrid";

const Post = ({ id }) => {
  const [post, setPost] = useState(null);
  const [postsByCategory, setPostsByCategory] = useState([]);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const post = await getSInglePost(id);
        setPost(post);

        const { name } = post.data.attributes.category.data.attributes;
        setName(name);

        const postsByCategory = await getPostsByCategory(name);
        setPostsByCategory(postsByCategory);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (post) {
    const { id: postId } = post.data;
    const { title, content } = post.data.attributes;
    const { username } =
      post.data.attributes.users_permissions_user.data.attributes;
    const { url } = post.data.attributes.coverImage.data.attributes;

    return (
      <Container className="d-flex flex-column align-items-center my-5">
        <Row className="justify-content-center w-100">
          <Col md={8}>
            <Card className="mb-4 shadow-sm border-0">
              <Card.Img
                variant="top"
                src={`${API_URL}${url}`}
                alt="Cover image"
                className="rounded-top"
                style={{ maxHeight: "300px", objectFit: "cover" }}
              />
              <Card.Body className="p-4">
                <Card.Title className="text-primary">{title}</Card.Title>
                <Card.Text>{content}</Card.Text>
                <div className="text-muted">ID: {postId}</div>
                <div className="text-muted">Username: {username}</div>
                <div className="text-muted">Category: {name}</div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <h5 className="text-secondary my-4">More about {name}</h5>
        <Row className="w-100">
          <Grid posts={postsByCategory} />
        </Row>
      </Container>
    );
  } else {
    return <div>Page Not Found</div>;
  }
};

export default Post;
