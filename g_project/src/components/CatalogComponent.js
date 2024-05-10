import React, { useState } from 'react';
import CardComponent from './CardComponent';

const CatalogComponent = () => {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState('');

    const handleInputChange = (e) => {
        setNewProduct(e.target.value);
    };

    const handleAddProduct = () => {
        if (newProduct.trim() !== '') {
            setProducts([...products, { name: newProduct.trim(), id: Date.now() }]);
            setNewProduct('');
        }
    };

    return (
        <div>
            <h2>Enter your store's products</h2>
            <div>
                <input
                    type="text"
                    value={newProduct}
                    onChange={handleInputChange}
                    placeholder="Enter product name"
                    style={{ padding: '5px', borderRadius: '3px', border: '1px solid #ccc' }}
                />
                <button onClick={handleAddProduct} style={{ padding: '5px 10px', marginLeft: '10px' }}>
                    Add
                </button>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {products.map((product) => (
                    <CardComponent key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default CatalogComponent;