// "use client";
import React from "react";
import styles from "../styles/postcard.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const PostCard = (props) => {
  const [styleName, setstyleName] = useState("");

  useEffect(() => {
    setstyleName(props.index);
  }, []);

  const name = "post." + props.index;
  const naamee = `${styles[`${name}`]}`;

  return (
    <Link
      href={`/post/${props.id}`}
      className={`${styles.post_card} ${styles["post" + props.index]}`}
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
