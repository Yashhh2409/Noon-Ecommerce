import axios from "axios";

export const fetchCategories = async (API_BACKEND_URL) => {
  console.log("fetchCategories function called"); // ✅ Check if function is called
  console.log("Backend URL:", API_BACKEND_URL); // ✅ Check API URL

  if (!API_BACKEND_URL) {
    console.error("API_BACKEND_URL is undefined! Check ShopContext.");
    return [];
  }

  try {
    const response = await axios.get(`${API_BACKEND_URL}/categories/getcategories`);
    console.log("Fetched Categories:", response.data); // ✅ Check response
    return response.data;
  } catch (error) {
    console.error("Failed to fetch categories:", error);
    return [];
  }
};
