import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { deleteComment } from "@/app/services/comments";

const PostComments = ({ propsComments }) => {
  const [comments, setComments] = useState(propsComments);
  const user = useSelector((state) => state.user.user);

  const handleDelete = async (commentId) => {
    // This function should be part of Utils
    try {
      await deleteComment(user.jwt, commentId);
      setComments(comments.filter((comment) => comment.id !== commentId));
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  return (
    <Card.Body>
      {comments.map((comment) => (
        <div key={comment.id}>
          <div>
            <h6>{comment.attributes.user.data.attributes.username}</h6>
            <p>{comment.attributes.text}</p>
          </div>
          {user && comment.attributes.user.data.id === user.user.id && (
            <FaTrash onClick={() => handleDelete(comment.id)} />
          )}
        </div>
      ))}
    </Card.Body>
  );
};

PostComments.propTypes = {
  propsComments: PropTypes.array.isRequired,
};

export default PostComments;
