"use client";
import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { API_URL, POSTS_URL } from "@/app/config";

const PostCard = ({ post }) => {
  const url = `${API_URL}${post.attributes.coverImage.data.attributes.url}`;
  console.log("IMAGEURL", url);
  return (
    <Card className="fixed-height-card">
      <Card.Img variant="top" src={url} className="fixed-height-card-img" />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="flex-shrink-0">
          {post.attributes.title}
        </Card.Title>
        <Card.Text className="flex-grow-1">{post.attributes.content}</Card.Text>
        <Button
          variant="primary"
          className="mt-auto"
          href={`/posts/${post.id}`}
        >
          See post
        </Button>
        <Card.Footer>By: John Doe</Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default PostCard;
