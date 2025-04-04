export const getHeaders = async () => {
  try {
    const response = await fetch("https://noon-website.onrender.com/noon/getHeader");
    if(!response.ok) {
        throw new Error("Failed to fetch header");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Headers", error.message);
    return null;
  }
};
