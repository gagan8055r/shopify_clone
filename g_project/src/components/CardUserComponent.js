// CardUserComponent.jsx
import React from 'react';
import './CardUserComponent.css'
const CardUserComponent = ({ product }) => {
    return (
        <div className="card-user-component">
            {product && (
                <div className="card-container">
                    <div>
                        <h3>{product.name}</h3>
                        {product.price && <p>Rs: {product.price}</p>}
                        <div>{product.description}</div>
                    </div>

                </div>
            )}
        </div>
    );
};

export default CardUserComponent;