const PUBLIC_BACKEND_URL = process.env.PUBLIC_BACKEND_URL;

export const fetchProducts = async () => {
    try {
        const response = await fetch(`${PUBLIC_BACKEND_URL}/products`)
        return await response.json();
    } catch (error) {
        console.error("Error fetching products", error.message);
    }
};