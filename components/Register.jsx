"use client";

import React, { useEffect, useState } from "react";
import { API_URL } from "../src/app/config";
import Link from "next/link";

import { Form, Button, Container } from "react-bootstrap";

import { registerUser } from "../src/app/services/users";

const Register = () => {
  const [user, setUser] = useState(null);
  const [data, setData] = useState({ username: "", email: "", password: "" });

  async function onSubmit(e) {
    e.preventDefault();
    try {
      const registeredUser = await registerUser(data);
      setUser(registeredUser);
      console.log("USER SET SUCCESSFULLY", registeredUser);
    } catch (error) {
      console.error("error:::", error.message);
      alert(error.message);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <Form.Group>
          <Form.Label htmlFor="username">userName</Form.Label>
          <Form.Control
            type="text"
            name="username"
            id="username"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="email">email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="password">password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
      <span>
        Already have an account? <Link href="/login">Login</Link>
      </span>
    </Container>
  );
};

export default Register;
