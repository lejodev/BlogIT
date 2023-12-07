import React from "react";
import styles from "../styles/home.module.scss";
import Image from "next/image";

const PostCard = (props) => {
  return (
    <div className={`${styles[`post${props.index + 1}`]} ${styles.post_card}`}>
      {/* <Image /> */}
      <div className={styles.image}></div>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.text}>{props.text}</div>
    </div>
  );
};

export default PostCard;
