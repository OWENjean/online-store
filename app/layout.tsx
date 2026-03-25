import React from 'react';

export const metadata = {
  title: 'Online Store',
  description: 'Welcome to our online store',
};

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <header style={{ backgroundColor: '#007bff', padding: '20px', color: 'white' }}>
                    <h1>Online Store</h1>
                    <nav>
                        <a href="/" style={{ color: 'white', marginRight: '20px' }}>Home</a>
                        <a href="/products" style={{ color: 'white', marginRight: '20px' }}>Products</a>
                        <a href="/cart" style={{ color: 'white' }}>Cart</a>
                    </nav>
                </header>
                <main>{children}</main>
                <footer style={{ backgroundColor: '#222', color: 'white', padding: '20px', textAlign: 'center', marginTop: '50px' }}>
                    <p>© 2026 Online Store. All rights reserved.</p>
                </footer>
            </body>
        </html>
    );
};

export default RootLayout;