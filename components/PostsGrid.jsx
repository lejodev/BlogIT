"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { API_URL } from "@/app/config";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function Grid(posts) {
  console.log("*****POSTS*****", posts);
  return posts.posts.data.map((post) => {
    console.log("PPOOSSTT", post.id);
    return (
      <Col md={4} className="mb-4" key={post.id}>
        <Link href={`/posts/${post.id}`}>
        <Card className="h-100 shadow-sm border-0">
          <div
            className="position-relative"
            style={{ overflow: "hidden", height: "200px" }}
          >
            <Card.Img
              src={`${API_URL}${post.attributes.coverImage.data.attributes.url}`}
              alt={`Post `}
              className="w-100 h-100"
              variant=""
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
          <Card.Body
            className="p-3 position-relative text-dark"
            style={{ zIndex: 2 }}
          >
            <Card.Title className="card-title text-primary">
              {post.attributes.title}
            </Card.Title>
            <Card.Text
              className="card-text text-truncate"
              style={{ maxHeight: "3rem" }}
            >
              {post.attributes.content}
            </Card.Text>
          </Card.Body>
        </Card>
        </Link>
      </Col>
    );
  });
}
