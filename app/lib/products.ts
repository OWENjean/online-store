// products.ts

// Product interface
interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    category: string;
}

// Sample product data
const products: Product[] = [
    {
        id: 1,
        name: 'Product 1',
        price: 29.99,
        description: 'Description of Product 1',
        category: 'Category A'
    },
    {
        id: 2,
        name: 'Product 2',
        price: 49.99,
        description: 'Description of Product 2',
        category: 'Category B'
    },
    {
        id: 3,
        name: 'Product 3',
        price: 19.99,
        description: 'Description of Product 3',
        category: 'Category A'
    },
];

export default products;
