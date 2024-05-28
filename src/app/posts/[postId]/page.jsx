import React from "react";
import Post from "../../../../components/Post";

const page = async ({ params }) => {
   return <Post id={params.postId} />;
};

export default page;
