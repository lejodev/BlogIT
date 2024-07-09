import { API_URL } from "../config";

export async function postComment({ text, user, postId }) {
  if (!text || !user || !postId) {
    throw new Error("Missing required parameters: text, user, or postId");
  }

  const body = JSON.stringify({
    data: {
      text: text,
      blog: postId,
      user: user.user.id,
    },
  });

  try {
    const res = await fetch(`${API_URL}/api/comments`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.jwt}`,
      },
      method: "POST",
      body,
    });

    if (!res.ok) {
      const errorMessage = `Error: ${res.status} ${res.statusText}`;
      throw new Error(errorMessage);
    }

    const comment = await res.json();
    return comment;
  } catch (error) {
    console.error("Failed to post comment:", error);
    throw error; // Rethrow the error to allow the caller to handle it
  }
}

export async function deleteComment(token, commentId) {
  console.log(token, commentId);
  try {
    const res = await fetch(`${API_URL}/api/comments/${commentId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "DELETE",
    });

    if (!res.ok) {
      const message = `Error: ${res.statusText}`;
      console.log(message);
      throw new Error(message);
    }

    const deleted = res.json();
    return deleted;
  } catch (error) {
    console.error(error);
    return false;
  }
}
