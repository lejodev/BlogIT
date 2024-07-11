import React from "react";
import Post from "../../../../components/post/Post";

const page = async ({ params }) => {
   return <Post id={params.postId} postData={params} />;
};

export default page;
