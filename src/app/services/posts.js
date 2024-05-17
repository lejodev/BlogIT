import { API_URL } from "../config";
export async function getAllPosts() {
  console.log("**************************",API_URL)
  const res = await fetch(`${API_URL}/api/blogs?`);
  const posts = await res.json();
  console.log(posts.data);
  return posts;
}


export async function getCover() {
  // const cover = 
}