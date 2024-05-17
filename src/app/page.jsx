// "use client";

import React from "react";
import { getAllPosts } from "./services/posts";
import { Card } from "flowbite-react";

export default async function Home() {
  const { data } = await getAllPosts();
  console.log(data);

  return (
    <div className="h-screen flex flex-col items-center overflow-auto p-4">
      {data.map(({ id, attributes }) => {
        return (
          <Card
            className="max-w-sm my-4 h-40 overflow-hidden flex flex-col items-start"
            imgSrc="/images/blog/image-4.jpg"
            horizontal
            key={id}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {attributes.title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {attributes.content}
            </p>
          </Card>
        );
      })}
    </div>
  );
}
