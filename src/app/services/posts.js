import { API_URL, COVER_URL, POSTS_URL } from "../config";
import { getUserCookie } from "@/utils/auth";
import { jwtDecode } from "jwt-decode";

const postsDetail =
  "?populate[users_permissions_user][fields][0]=username&populate[category][fields][0]=name&populate[coverImage][fields][0]=url&populate[comments][populate][0]=user";

export async function getAllPosts() {
  try {
    const endpoint = `${POSTS_URL}?${COVER_URL}`;
    const res = await fetch(endpoint);
    if (!res.ok) {
      console.log(res);
      throw new Error(res || "Error getting all the posts");
    }
    const posts = await res.json();
    console.log("ALL POSTS", posts);
    return posts;
  } catch (error) {
    console.error("Error getting posts:", error);
  }
}

export function getCover({ attributes }) {
  const { url } = attributes.coverImage.data.attributes;
  console.log("COVER", url);
  return `${API_URL}${url}`;
}

export async function getSInglePost(postId) {
  const url = `${POSTS_URL}/${postId}${postsDetail}`;
  const res = await fetch(url);
  let post = [];
  if (res.ok) {
    post = await res.json();
  }
  console.log("SINGLE POST", post);
  return post;
}

export async function getPostsByCategory(category) {
  const res = await fetch(
    `${POSTS_URL}${postsDetail}&filters[category][name][$eq]=${category}`
  );
  const categories = await res.json();
  console.log("POST BY CATEGORY", categories);
  return categories;
}

export async function createPost({
  title,
  content,
  coverImage,
  users_permissions_user,
  category,
}) {
  try {
    const token = JSON.parse(localStorage.getItem("user"))
    console.log("RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR", token)
    if (!token) {
      throw new Error("No cookie set");
    }

    const decodedUser = jwtDecode(token.jwt);
    console.log("TOKEN", decodedUser);

    const res = await fetch(`${API_URL}/api/blogs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.jwt}`,
      },
      body: JSON.stringify({
        data: {
          title,
          content,
          coverImage,
          users_permissions_user: [decodedUser.id],
          category: [category],
        },
      }),
    });
    const post = await res.json();
    if (!res.ok) {
      console.log(post);
      throw new Error(res.message || "Error creating post");
    }
    console.log("***post***", post);
    return post;
  } catch (error) {
    console.error("***Error***", error);
    throw error;
  }
}

export async function uploadImageToCloudinary(imageFile) {
  console.log(imageFile);

  const formdata = new FormData();

  formdata.append("file", imageFile);
  formdata.append("upload_preset", "ml_default");

  console.log(formdata);

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/dzxc4hipo/image/upload`,
    { method: "POST", body: formdata }
  );
  if (!res.ok) {
    return;
  }
  const data = await res.json();
  console.log("DATA", data.secure_url);
  return data;
}

export async function strapiFileEntry(imageData) {
  const { public_id, secure_url, format } = imageData;
  
  // Fetch the image from the URL and convert it to a Blob
  const response = await fetch(secure_url);
  const blob = await response.blob();
  
  // Create a File object from the Blob
  const file = new File([blob], public_id, { type: blob.type });

  const formData = new FormData();
  formData.append("files", file); // Actual file object
  // formData.append("refId", 24); // Reference ID for the related content
  formData.append("ref", "api::blog.blog"); // The name of the model the entry is for (e.g., 'post')
  formData.append("field", "coverImage");

  const token = JSON.parse(localStorage.getItem("user"))
  if (!token) {
    throw new Error("No cookie set");
  }

  const res = await fetch(`${API_URL}/api/upload`, {
    headers: {
      // Do not set Content-Type header manually
      Authorization: `Bearer ${token.jwt}`,
    },
    method: "POST",
    body: formData,
  });

  const data = await res.json();
  console.log("data*-**//*/*/***/", data);
  console.log(token)
  if (!res.ok) {
    console.log("ERROR=====", res);
    throw new Error("failed to load entry");
  }
  return data[0];
}

