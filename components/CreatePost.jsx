"use client";

import React, { useState, useEffect } from "react";
import { Form, Container, Button } from "react-bootstrap";
import { createPost } from "@/app/services/posts";
import { getCategories } from "@/app/services/categories";

const CreatePost = () => {
  useEffect(() => {
    async function fetchCategories() {
      try {
        const categoriesList = await getCategories();
        setCategories(categoriesList.data);
      } catch (error) {
        console.error("Failed to fetch categorioes", error);
        setCategories([]);
      }
    }
    fetchCategories();
  }, []);

  const [data, setData] = useState({ title: "", content: "", category: [] });
  const [categories, setCategories] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    console.log("categories", categories.data);
    createPost(data);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const selectedCategory = (e) => {
    const category = e.target.value;
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label htmlFor="title">Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your post title"
            name="title"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="textarea"
            placeholder="Write your post here"
            name="content"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="category">Categories</Form.Label>
          <Form.Select id="category" name="category" onChange={handleChange}>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.attributes.name}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <Button type="submit">CREATE</Button>
      </Form>
    </Container>
  );
};

export default CreatePost;
