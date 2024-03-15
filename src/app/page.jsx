"use client";

import React from "react";
import styles from "@/../styles/home.module.scss";
import postStyles from "../../styles/postcard.module.scss";
import Image from "next/image";
import PostCard from "../../components/PostCard";
import Link from "next/link";
import { useState, useEffect } from "react";

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    return function getPosts() {
      fetch("/api/post")
        .then((res) => res.json())
        .then((posts) => {
          if (posts.length > 3) {
            const lastPosts = posts.slice(-3).reverse();
            // console.log("LAST POSTS", lastPosts);
            setPosts(lastPosts);
          } else {
            // console.log(posts);
            setPosts(lastPosts);
          }
        })
        .catch((error) => {
          throw new Error({ "CARECHIMBA ERROR": error });
        });
    };
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.info_all_posts}>
        <h1 className={styles.title}>Most recent posts</h1>
        <Link className={styles.all_posts_link} href={"/posts"}>
          View All Posts
        </Link>
      </div>
      <section className={styles.recent_posts}>
        {posts.map((post, index) => (
          <PostCard
            index={index + 1}
            title={post.title}
            text={post.text}
            key={post._id}
            id={post._id}
          />
        ))}
      </section>
    </div>
  );
};

export default Home;
