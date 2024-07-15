import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { FaEdit, FaTrash } from "react-icons/fa";
import { deleteComment } from "@/app/services/comments";

import EditCommentModal from "../modals/EditCommentModal";

const PostComments = ({ propsComments }) => {
  const [comments, setComments] = useState(propsComments);
  const [currentComment, setCurrentComment] = useState({ id: "", text: "" });
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const user = useSelector((state) => state.user.user);

  const handleDelete = async (commentId) => {
    try {
      await deleteComment(user.jwt, commentId);
      setComments(comments.filter((comment) => comment.id !== commentId));
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  const handleEdit = (comment) => {
    const {
      id,
      attributes: { text },
    } = comment;
    setCurrentComment({ id, text });
    setModalIsOpen(true);
  };

  const handleClose = () => {
    setModalIsOpen(false);
  };

  const handleSave = (editedComment) => {
    console.log("editedComment", editedComment);
    setComments(
      comments.map((currComment) =>
        currComment.id === editedComment.id
          ? {
              ...currComment,
              attributes: {
                ...currComment.attributes,
                text: editedComment.text,
              },
            }
          : currComment
      )
    );
    setModalIsOpen(false);
  };

  return (
    <>
      <Card.Body>
        {comments.map((comment) => (
          <div key={comment.id}>
            <div>
              <h6>{comment.attributes.user.data.attributes.username}</h6>
              <p>{comment.attributes.text}</p>
            </div>
            {user && comment.attributes.user.data.id === user.user.id && (
              <>
                <FaTrash onClick={() => handleDelete(comment.id)} />
                <FaEdit onClick={() => handleEdit(comment)} />
              </>
            )}
          </div>
        ))}
      </Card.Body>
      {modalIsOpen && (
        <EditCommentModal
          open={modalIsOpen}
          onClose={handleClose}
          onSave={handleSave}
          currentComment={currentComment}
        />
      )}
    </>
  );
};

export default PostComments;
