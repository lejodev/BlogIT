"use client";

import React, { useEffect, useState } from "react";
import { API_URL } from "../src/app/config";

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
      console.error("error:::", error);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="username">userName</label>
        <input
          type="text"
          name="username"
          id="username"
          onChange={handleChange}
        />
        <label htmlFor="email">email</label>
        <input type="email" name="email" id="email" onChange={handleChange} />
        <label htmlFor="password">password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;
