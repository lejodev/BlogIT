import { API_URL } from "../config";

export async function getCategories() {
  const res = await fetch(`${API_URL}/api/categories?fields[0]=name`);
  const categories = await res.json();
  return categories;
}
