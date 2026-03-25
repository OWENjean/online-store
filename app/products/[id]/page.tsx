import React from 'react';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
    const { id } = useParams();

    // Fetch product details based on the id

    const handleAddToCart = () => {
        // Logic to add the product to cart
    };

    return (
        <div>
            <h1>Product Detail for Product ID: {{id}}</h1>
            {/* Product details go here */}
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
};

export default ProductPage;
