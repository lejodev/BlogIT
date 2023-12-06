import React from "react";

async function getPosts() {
  const res = await fetch("http://localhost:3000/api/post");
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  const posts = await res.json();
  if (posts.length >= 3) {
    const lastPosts = posts.slice(-3).reverse;
    console.log(lastPosts);
    return lastPosts;
  }
  console.log(posts);
  return posts;
}

const Home = async () => {
  const posts = await getPosts();
  console.log(posts);
  return (
    <div className={styles.main}>
      <section className={styles.recent_posts}></section>
      Home
    </div>
  );
};

export default Home;
