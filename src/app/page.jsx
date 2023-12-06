import React from "react";
import styles from "@/../styles/home.module.scss";

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
      <section className={styles.recent_posts}>
        {posts.map((post, index) => (
          <div
            className={styles[`post${index + 1}`]}
            key={post._id}
          >
            <div className={styles.title}>{post.title}</div>
            <div className={styles.text}>{post.text}</div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
