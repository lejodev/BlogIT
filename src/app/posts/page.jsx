"use client";

import React from "react";
import { useState, useEffect } from "react";

const page = () => {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/post")
      .then((res) => res.json())
      .then((posts) => {
        console.log(posts);
        setPosts(posts);
        setLoading(false)
      });
  }, []);

  if (loading) return <>LOADING...</>;
  return (
    <div>
      {posts.map((post) => (
        <div>{post.title}</div>
      ))}
    </div>
  );
};

export default page;
