"use client";
import React from "react";
import styles from "../styles/home.module.scss";
import Link from "next/link";
import Image from "next/image";

const PostCard = (props) => {
  const redirectPost = (postId) => {
    alert(postId);
  };

  return (
    <Link
      href={`/post/${props.id}`}
      className={`${styles[`post${props.index + 1}`]} ${styles.post_card}`}
      // onClick={() => {
      //   redirectPost(props.id);
      // }}
    >
      {/* <Image /> */}
      <div className={styles.image}></div>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.text}>{props.text}</div>
    </Link>
  );
};

export default PostCard;
