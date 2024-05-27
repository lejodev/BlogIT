import React from "react";
import BlogsCarousel from "../../../../components/BlogsCarousel";
import { API_URL } from "@/app/config";
import { getSInglePost, getPostsByCategory } from "@/app/services/posts";

const page = async ({ params }) => {
  const post = await getSInglePost(params.postId);
  const { name } = post.data.attributes.category.data.attributes;
  const postsByCategory = await getPostsByCategory(name);

  if (post.length !== 0) {
    console.log("THIS IS A SINGLE POST, AS HIS OWNER", post);
    const { id } = post.data;
    const { title, content } = post.data.attributes;
    const { username } =
      post.data.attributes.users_permissions_user.data.attributes;
    const {url}  = post.data.attributes.coverImage.data.attributes
    console.log("URL",url)
    return (
      <div>
        <div className="postContainer">
          <img src={`${API_URL}${url}`} alt="Here is suposed to have an image, if not. Fuck" srcset="" />
          <h5>{title}</h5>
          <p>{content}</p>
          <div>{id}</div>
          <div>{username}</div>
          <div>Category {name}</div>
        </div>
        <h5>More about {name}</h5>
        <div className="categories-contaner">
          <BlogsCarousel blogs={postsByCategory} />;
        </div>
      </div>
    );
  } else {
    return <>PAGE NOT FOUND</>;
  }
};

export default page;
