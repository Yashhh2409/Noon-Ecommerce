
const PUBLIC_BACKEND_URL = process.env.PUBLIC_BACKEND_URL;

const getCategories = async () => {
  try {
    const res = await fetch(`${PUBLIC_BACKEND_URL}/categories`, {
      next: { revalidate: 3600 }, // cache for 1 hr
    });
    if (!res.ok) throw new Error("Failed to fetch categories");
    return res.json();
  } catch (error) {
    console.error("Error fetching categries:", error);
    return [];
  }
};

export default getCategories;