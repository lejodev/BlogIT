"use client";
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { API_URL } from "@/app/config";
import { getSInglePost, getPostsByCategory } from "@/app/services/posts";

const Post = async ({ id }) => {
  const post = await getSInglePost(id);
  const { name } = post.data.attributes.category.data.attributes;
  const postsByCategory = await getPostsByCategory(name);

  if (post.length !== 0) {
    const { id } = post.data;
    const { title, content } = post.data.attributes;
    const { username } = post.data.attributes.users_permissions_user.data.attributes;
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
                <div className="text-muted">ID: {id}</div>
                <div className="text-muted">Username: {username}</div>
                <div className="text-muted">Category: {name}</div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <h5 className="text-secondary my-4">More about {name}</h5>
        <Row className="w-100">
          {postsByCategory.data.map((post, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card className="h-100 shadow-sm border-0">
                <div className="position-relative" style={{ overflow: "hidden", height: "200px" }}>
                  <img
                    src={`${API_URL}${post.attributes.coverImage.data.attributes.url}`}
                    alt={`Post ${index}`}
                    className="w-100 h-100"
                    style={{ objectFit: "cover" }}
                  />
                  <div
                    className="position-absolute w-100 h-100"
                    style={{
                      backgroundImage: `url(${API_URL}${post.attributes.coverImage.data.attributes.url})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      filter: "blur(20px)",
                      zIndex: 1,
                      opacity: 0.3,
                    }}
                  ></div>
                </div>
                <Card.Body className="p-3 position-relative text-dark" style={{ zIndex: 2 }}>
                  <h5 className="card-title text-primary">{post.attributes.title}</h5>
                  <p className="card-text text-truncate" style={{ maxHeight: "3rem" }}>
                    {post.attributes.content}
                  </p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  } else {
    return <>PAGE NOT FOUND</>;
  }
};

export default Post;
