import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { Form, Button, Container, FormGroup } from "react-bootstrap";

function EditModal({ open, post, onClose, onSave }) {
  const [currentPost, setCurrentPost] = useState({});

  useEffect(() => {
    if (post) {
      setCurrentPost(post);
    }
  }, [post]);

  function handleChange(e) {
    const { name, value } = e.target;
    setCurrentPost({ ...currentPost, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSave(currentPost);
  }

  return (
    <Modal show={open} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Form.Label htmlFor="title">Title</Form.Label>
            <Form.Control
              name="title"
              type="text"
              placeholder="Edit your title"
              value={currentPost.title || ""}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Form.Label htmlFor="content">Content</Form.Label>
            <Form.Control
              name="content"
              as="textarea"
              rows={3}
              placeholder="Edit your content"
              value={currentPost.content || ""}
              onChange={handleChange}
            />
          </FormGroup>
          <Button variant="primary" type="submit">
            Save changes
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditModal;
