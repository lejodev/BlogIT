"use client";

import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { API_URL } from "@/app/config";

const PostsGrid = ({ postsByCategory }) => {
  console.log("INCOMING POSTS", postsByCategory);
  return (
    <Container className="d-flex justify-content-center">
      {/* {posts.data.map((post) => { */}
      {/* console.log(post); */}
      {/* return ( */}
      <Row className="main-grid row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {postsByCategory.data.map(({ id, attributes }) => {
          const imageUrl = `${API_URL}${attributes.coverImage.data.attributes.url}`;

          return (
            <Col key={id} className="d-flex justify-content-center">
              <Card className="fixed-height-card">
                <Card.Img
                  variant="top"
                  src={imageUrl}
                  className="fixed-height-card-img"
                  alt="SUPPOSE here is an image"
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="flex-shrink-0">
                    {attributes.title}
                  </Card.Title>
                  <Card.Text className="flex-grow-1">
                    {attributes.content}
                  </Card.Text>
                  <Button variant="primary" className="mt-auto">
                    See post
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
      {/* ); */}
      {/* //   })} */}
    </Container>
  );
};

export default PostsGrid;
