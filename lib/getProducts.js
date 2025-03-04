const PUBLIC_BACKEND_URL = process.env.PUBLIC_BACKEND_URL;

const getProducts = async () => {
    try {
        const res = await fetch(`${PUBLIC_BACKEND_URL}/products?subcategory=${subcategory}`);
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
}

export default getProducts;