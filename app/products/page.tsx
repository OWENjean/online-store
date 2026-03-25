'use client';

import { useState } from 'react';

const products = [
  { id: 1, name: 'Product 1', price: 29.99, description: 'Amazing product 1' },
  { id: 2, name: 'Product 2', price: 49.99, description: 'Awesome product 2' },
  { id: 3, name: 'Product 3', price: 19.99, description: 'Great product 3' },
];

export default function ProductsPage() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div style={{ padding: '40px' }}>
      <h1>Our Products</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        {products.map(product => (
          <div key={product.id} style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#28a745' }}>${product.price.toFixed(2)}</p>
            <button 
              onClick={() => handleAddToCart(product)}
              style={{ 
                padding: '10px 20px', 
                backgroundColor: '#007bff', 
                color: 'white', 
                border: 'none', 
                borderRadius: '5px', 
                cursor: 'pointer',
                fontSize: '16px'
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
