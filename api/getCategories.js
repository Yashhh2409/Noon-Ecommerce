export const getCategories = async () => {
  try {
    const response = await fetch("https://noon-website.onrender.com/noon/get-categories");

    if (!response.ok) {
      throw new Error("Failed to fetch categories");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching categories:", error.message);
    return null;
  }
};
