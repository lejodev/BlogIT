"use client";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { API_URL } from "@/app/config";
import { getSInglePost, getPostsByCategory } from "@/app/services/posts";
import Grid from "../PostsGrid";
import { useSelector } from "react-redux";

import PostComment from "./PostComment";

const Post = ({ id }) => {
  const [post, setPost] = useState(null);
  const [postsByCategory, setPostsByCategory] = useState([]);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const user = useSelector((state) => state.user.user);
  console.log("UUSSEERR::", user);

  useEffect(() => {
    async function getData() {
      try {
        const post = await getSInglePost(id);
        setPost(post);
        console.log("Post setted", post);

        const { name } = post.data.attributes.category.data.attributes;
        setName(name);
        console.log("name setted", name);

        const postsByCategory = await getPostsByCategory(name);
        setPostsByCategory(postsByCategory);
        console.log("PBC setted", postsByCategory);
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
    return <div>*********THIS IS A FUCKING ERROR*********</div>;
  }

  if (post) {
    console.log("THERE IS POST");
    const { id: postId } = post.data;
    console.log("DATA");
    const { title, content } = post.data.attributes;
    console.log("TITLE AND CONTENT");
    const { username } =
      post.data.attributes.users_permissions_user.data.attributes;
    console.log("USERNAME");
    const url = post.data.attributes.coverImage.data.attributes.url;
    console.log("id", id, "title", title, "content", "username", username);
    const comments = post.data.attributes.comments.data;
    console.log(comments);

    return (
      <Container className="d-flex flex-column align-items-center my-5">
        <Row className="justify-content-center w-100">
          <Col md={8}>
            <Card className="mb-4 shadow-sm border-0">
              <Card.Img
                variant="top"
                src={`${url}`}
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
              {user ? <PostComment payloadInfo={{ user, postId }} /> : null}
              {comments.length > 0 ? (
                <>
                  <Card.Header>Comments</Card.Header>
                  <Card.Body>
                    {comments.map((comment) => (
                      <div key={comment.id}>
                        {
                          <div>
                            <h6>
                              {comment.attributes.user.data.attributes.username}
                            </h6>
                            <p>{comment.attributes.text}</p>
                          </div>
                        }
                      </div>
                    ))}
                  </Card.Body>
                </>
              ) : (
                ""
              )}
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
