"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { deletePost, getAllPosts, editPost } from "../src/app/services/posts";
import { useSelector } from "react-redux";
import { FaEdit, FaTrash } from "react-icons/fa";
import Link from "next/link";
import { Container, Row, Col, Card } from "react-bootstrap";
import Loading from "../components/Loaading";
import EditModal from "./modals/EditModal";

export default function MainPosts() {
  const user = useSelector((state) => state.user.user);

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentPost, setCurrentPost] = useState(null);
  const searchParams = useSearchParams();
  const urlParam = searchParams.get("postId");

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await getAllPosts();

        if (data) {
          setPosts(data);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }

    fetchData();
  }, []);

  async function handlePostDelete(postId) {
    const res = await deletePost(postId, user.jwt);
    setPosts(posts.filter((post) => post.id !== postId));
  }

  function handleEdit(post, id) {
    setCurrentPost({ ...post, tmpId: id });
    setModalIsOpen(true);
  }

  async function handleSave(updatedPost) {
    console.log("This is the saved post:", updatedPost);

    const EDITPOST = await editPost(updatedPost, user.jwt);
    console.log("POST AFTER BEING UPDATED", EDITPOST);

    setPosts(
      posts.map((postItem) =>
        postItem.id === updatedPost.tmpId
          ? { ...postItem, attributes: updatedPost }
          : postItem
      )
    );

    setModalIsOpen(false);
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <Container className="d-flex justify-content-center my-5">
      <Row className="d-flex flex-column w-100">
        {posts.map(({ id, attributes }) => (
          <Col key={id} md={12} className="mb-4">
            {attributes.users_permissions_user &&
              user.user.id === attributes.users_permissions_user.data.id && (
                <>
                  <FaTrash onClick={() => handlePostDelete(id)} />
                  <FaEdit onClick={() => handleEdit(attributes, id)} />
                </>
              )}
            <Link href={`/posts/${id}`} style={{ textDecoration: "none" }}>
              <Card
                className="h-100 shadow-sm border-0 d-flex flex-row"
                style={{ maxHeight: "200px" }}
              >
                <Card.Body
                  className="p-3 d-flex flex-column justify-content-center text-dark"
                  style={{ zIndex: 2, overflow: "hidden" }}
                >
                  <Card.Title className="card-title text-primary">
                    {attributes.title}
                  </Card.Title>
                  <Card.Text
                    className="card-text"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {attributes.content}
                  </Card.Text>
                </Card.Body>
                <div
                  className="position-relative"
                  style={{
                    overflow: "hidden",
                    width: "200px",
                    flexShrink: 0,
                  }}
                >
                  <Card.Img
                    src={`${attributes.coverImage.data.attributes.url}`}
                    alt={`${
                      attributes.coverImage.data.attributes.url ||
                      "Banner image"
                    }`}
                    className="w-100 h-100"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
      {modalIsOpen && (
        <EditModal
          open={modalIsOpen}
          post={currentPost}
          onClose={() => setModalIsOpen(false)}
          onSave={handleSave}
        />
      )}
    </Container>
  );
}
