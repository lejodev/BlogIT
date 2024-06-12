import { API_URL } from "../config";

export async function registerUser({ username, email, password }) {
  try {
    const response = await fetch(`${API_URL}/api/auth/local/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
        resetPasswordToken: "resetPasswordToken",
        confirmationToken: "confirmationToken",
        confirmed: false,
        blocked: false,
      }),
    });
    const data = await response.json();
    if (!response.ok) {
      console.error("Error while registering:", data.message || data);
      throw new Error(data.message || "Error while registering");
    } else {
      return data
    }
  } catch (error) {
    console.error("Error while signing in:", error);
  }
}
