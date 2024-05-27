"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { getAllPosts, getCover } from "./../src/app/services/posts";

// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

export default function MainPosts() {
  const [posts, setPosts] = useState([]);
  const searchParams = useSearchParams();
  const urlParam = searchParams.get("postId");

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await getAllPosts();

        const postsWithCovers = await Promise.all(
          data.map(async (post) => {
            const coverUrl = await getCover(post);
            return { ...post, coverUrl };
          })
        );

        setPosts(postsWithCovers);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <Container className="d-flex justify-content-center">
      <Row className="main-grid row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {posts.map(({ id, attributes, coverUrl }) => (
          <Col key={id} className="d-flex justify-content-center">
            <Card className="fixed-height-card">
              <Card.Img
                variant="top"
                src={coverUrl}
                className="fixed-height-card-img"
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="flex-shrink-0">
                  {attributes.title}
                </Card.Title>
                <Card.Text className="flex-grow-1">
                  {attributes.content}
                </Card.Text>
                <Button variant="primary" className="mt-auto" href={`/posts/${id}`}>
                  See post
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
