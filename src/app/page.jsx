import React from "react";
import styles from "@/../styles/home.module.scss";
import Image from "next/image";
import PostCard from "../../components/PostCard";
import Link from "next/link";

async function getPosts() {
  const res = await fetch("http://localhost:3000/api/post");
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  const posts = await res.json();
  console.log(posts);
  if (posts.length >= 3) {
    const lastPosts = posts.slice(-3).reverse();
    console.log(lastPosts);
    return lastPosts;
  } else {
    console.log(posts);
    return posts;
  }
}

const Home = async () => {
  const posts = await getPosts();
  console.log(posts);

  return (
    <div className={styles.main}>
      <div className={styles.info_all_posts}>
        <h1 className={styles.title}>Most recent posts</h1>
        <Link className={styles.all_posts_link} href={"#"}>
          View All Posts {">"}
        </Link>
      </div>
      <section className={styles.recent_posts}>
        {posts.map((post, index) => (
          <PostCard
            index={index}
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
