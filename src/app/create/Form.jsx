"use client";

import React, { FormEvent } from "react";
import { useSession } from "next-auth/react";

const Form = () => {
  const { data: session } = useSession();
  async function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const title = formData.get("title");
    const text = formData.get("text");

    const blog = {
      title: title,
      text: text,
      author: session.user.userId,
    };

    if (session) {
      console.log(blog);
      fetch("/api/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog),
      })
        .then((resp) => resp.json())
        .then((post) => {
          console.log(post);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("ZFXSGDH");
    }
  }
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="title" />
      <input type="text" name="text" />
      <button type="submit">Publish</button>
    </form>
  );
};

export default Form;
