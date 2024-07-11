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
    // return data
    if (!response.ok) {
      console.error("Error while registering:", data);
      throw new Error(data.error.message || "Error while registering");
    } else {
      return data;
    }
  } catch (error) {
    console.error("Error while signing in:", error);
    throw error;
  }
}

export async function loginUser({ identifier, password }) {
    try {
      const response = await fetch(`${API_URL}/api/auth/local`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ identifier, password }),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        const errorMessage = data.error?.message || "Error while logging in";
        console.error("Error Response:", errorMessage);
        throw new Error(errorMessage);
      }
      return data;
    } catch (error) {
      console.error("Error while logging in:", error.message || error);
      throw new Error(error.message || error);
    }
  }