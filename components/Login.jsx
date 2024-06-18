"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Form, Button, Container } from "react-bootstrap";
import { loginUser } from "../src/app/services/users";
import { useCookies } from "react-cookie";
import { setCookie } from "cookies-next";
import { redirect } from "next/navigation";

const Login = () => {
  const [data, setData] = useState({ identifier: "", password: "" });
  const [error, setError] = useState(null); // Add state for error handling

  async function onSubmit(e) {
    e.preventDefault();
    setError(null); // Reset error state before making the request
    try {
      const loggedInUser = await loginUser(data);
      console.log("USER LOGGED IN SUCCESSFULLY", loggedInUser.jwt);
      setCookie("token", loggedInUser.jwt);
      redirect("/create");
    } catch (error) {
      setError(error.message); // Capture the error message
      console.error("Error:::", error.message);
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
          <Form.Label htmlFor="identifier">Identifier</Form.Label>
          <Form.Control
            type="text"
            name="identifier"
            id="identifier"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
          />
        </Form.Group>
        <Button type="submit">Login</Button>
      </Form>
      {error && <p style={{ color: "red" }}>{error}</p>}{" "}
      {/* Display the error */}
      <span>
        Don't have an account? <Link href="/register">Register</Link>
      </span>
    </Container>
  );
};

export default Login;
