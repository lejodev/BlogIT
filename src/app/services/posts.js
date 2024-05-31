import { API_URL, COVER_URL, POSTS_URL } from "../config";
const postsDetail =
  "?populate[users_permissions_user][fields][0]=username&populate[category][fields][0]=name&populate[coverImage][fields][0]=url";
export async function getAllPosts() {
  const endpoint = `${POSTS_URL}?${COVER_URL}`;
  const res = await fetch(endpoint);
  const posts = await res.json();
  console.log("ALL POSTS", posts);
  return posts;
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
