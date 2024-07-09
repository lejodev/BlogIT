import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { postComment } from "@/app/services/comments";
import { useSelector } from "react-redux";

const PostComment = ({ payloadInfo }) => {
  const [comment, setComment] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setComment({ ...comment, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      text: comment.comment,
      user: payloadInfo.user,
      postId: payloadInfo.postId,
    };
    console.log("comment", payload);
    const response = await postComment(payload);
    console.log(response);
    setComment("");
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Label htmlFor="comment">Comment</Form.Label>
        <Form.Control
          type="text"
          placeholder="write your comment here!"
          onChange={handleChange}
          name="comment"
        ></Form.Control>
        <Button type="submit">COMMENT</Button>
      </Form>
    </Container>
  );
};

export default PostComment;
