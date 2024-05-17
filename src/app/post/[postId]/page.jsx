// "use client";

import React from "react";
import { useEffect, useState } from "react";

const page = ({ params }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`/api/post/${params.postId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.post);
        setData(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>LOADING...</p>;
  if (!data) return <p>NO DATA</p>;

  if (data) data;
  return (
    <div>
      <h1>{data.post.title}</h1>
      GONORREAAAAAAAA!
      <p>perroooooo{data.post.text}</p>
    </div>
  );
};

export default page;
