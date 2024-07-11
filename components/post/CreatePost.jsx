"use client";

import React, { useState, useEffect } from "react";
import { Form, Container, Button } from "react-bootstrap";
import {
  createPost,
  uploadImageToCloudinary,
  strapiFileEntry,
} from "@/app/services/posts";
import { getCategories } from "@/app/services/categories";
import { getUserCookie } from "@/utils/auth";

const CreatePost = () => {
  useEffect(() => {
    async function fetchCategories() {
      try {
        const userToken = getUserCookie("token");
      } catch (error) {
        console.error("Error getting token:", error);
      }
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

  const [data, setData] = useState({
    title: "",
    content: "",
    coverImage: "",
    category: [],
  });
  const [categories, setCategories] = useState([]);
  const [successful, setSuccessful] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    // Get the war image response from sloudinary
    const cloudinaryImage = await uploadImageToCloudinary(data.coverImage);

    // creaty the image entry to strpi
    // This function associates strapi with the image stores in cloudinary. And creates a Standard to be "uploadable" to strapi
    const imageStrapiEntry = await strapiFileEntry(cloudinaryImage);

    const postData = {
      title: data.title,
      content: data.content,
      coverImage: imageStrapiEntry,
      category: data.category,
    };
    createPost(postData);
    setSuccessful(true);
  }

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name == "coverImage") {
      setData({ ...data, [name]: files[0] });
    } else {
      setData({ ...data, [name]: value });
    }
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
          <Form.Label htmlFor="coverImage">Image</Form.Label>
          <Form.Control
            name="coverImage"
            type="file"
            accept="/image"
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="content">Content</Form.Label>
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
