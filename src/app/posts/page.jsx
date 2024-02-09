"use client";
import React from "react";
import { useState, useEffect } from "react";
import styles from "../../../styles/posts.module.scss";
import PostCard from "../../../components/PostCard";

const page = () => {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/post")
      .then((res) => res.json())
      .then((posts) => {
        // console.log(posts);
        setPosts(posts);
        setLoading(false);
      });
  }, []);

  if (loading) return <>LOADING...</>;
  return (
    <div className={styles.posts_all}>
      {posts.map((post, index) => (
        <PostCard
          title={post.title}
          text={post.text}
          key={post._id}
          id={post._id}
        />
      ))}
    </div>
  );
};

export default page;
