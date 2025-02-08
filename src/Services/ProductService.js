import axios from "axios";

// Save a product
export const saveProduct = async (jsonPayload) => {
    try {
        const response = await axios.post(`http://localhost:2222/api/v1/save`, jsonPayload);
        console.log("Product complete response:", response);
        console.log("Product data:", response.data);
        alert("Product saved successfully");
        return response.data;
    } catch (error) {
        console.error("Error saving product:", error);
    }
};

// Get all products
export const getProducts = async () => {
    try {
        const response = await axios.get('http://localhost:2222/api/v1/products');
        console.log('API Response:', response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
};

// Delete a product by ID
export const deleteProduct = async (id) => {
    try {
        const response = await axios.delete(`http://localhost:2222/api/v1/product/${id}`);
        console.log("Data deleted successfully");
        return response.status;
    } catch (error) {
        console.error("Error deleting product:", error);
    }
};
    
