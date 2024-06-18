import { API_URL, COVER_URL, POSTS_URL } from "../config";
import Cookies from "js-cookie";

const postsDetail =
  "?populate[users_permissions_user][fields][0]=username&populate[category][fields][0]=name&populate[coverImage][fields][0]=url";

export async function getAllPosts() {
  try {
    const endpoint = `${POSTS_URL}?${COVER_URL}`;
    const res = await fetch(endpoint);
    if (!res.ok) {
      console.log(res)
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
  users_permissions_user,
  category,
}) {
  try {
    const token = Cookies.get("token");
    if (!token) {
      throw new Error("No cookie set");
    }
    const res = await fetch(`${API_URL}/api/blogs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        data: {
          title,
          content,
          users_permissions_user: [24],
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
