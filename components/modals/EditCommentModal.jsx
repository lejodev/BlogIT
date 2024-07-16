import { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { Form, Button, Container, FormGroup } from "react-bootstrap";

const EditCommentModal = ({ open, currentComment, onClose, onSave }) => {
  const [comment, setComment] = useState({});

  useEffect(() => {
    if (currentComment) {
      setComment(currentComment);
    }
  }, [currentComment]);

  async function handleChange(e) {
    const { name, value } = e.target;
    setComment({ ...comment, [name]: value });
  }

  async function handleSave(e) {
    e.preventDefault();
    onSave(comment);
  }

  return (
    <Modal show={open} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit your comment</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSave}>
        <Form.Group>
          <Form.Label htmlFor="text"> Comment</Form.Label>
          <Form.Control
            type="text"
            onChange={handleChange}
            name="text"
            value={comment.text || ""}
          ></Form.Control>
        </Form.Group>
        <Button type="submit">Send it!</Button>
      </Form>
    </Modal>
  );
};

export default EditCommentModal;
