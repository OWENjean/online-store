'use client';

export default function Home() {
  return (
    <div style={{ padding: '40px' }}>
      <h1>Welcome to Online Store</h1>
      <p>Shop our amazing products</p>
      <a href="/products" style={{ padding: '10px 20px', backgroundColor: '#28a745', color: 'white', textDecoration: 'none', borderRadius: '5px', display: 'inline-block' }}>
        Shop Now
      </a>
    </div>
  );
}
