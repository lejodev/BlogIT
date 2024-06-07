"use client";

import React from "react";
import { API_URL } from "../src/app/config";
import { useEffect, useState } from "react";

const Register = () => {
  useEffect(() => {
    try {
      function registerUser() {
        fetch(`${API_URL}/auth/local/register`, {
          headers: {
            "Content-Type": "application/json",
          },
          body: {
            username: "Tales",
            email: "talesdemileto@mindyourownbusiness.com",
            provider: "dontwannagetone",
            password: "GFU",
          },
          method: "POST",
        });
      }
      console.log("USER REGISTERED?????")
      registerUser();
    } catch (error) {
      console.log("Error while signing in", error);
    }
  }, []);

  return <div>Register</div>;
};

export default Register;
