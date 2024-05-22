import React from 'react';
import './CardUserComponent.css';

function CardUserComponent({ product }) {
    const { name, description, price, content_styles } = product;

    const nameStyle = { fontFamily: content_styles?.nameFont || 'Arial' };
    const priceStyle = { fontFamily: content_styles?.priceFont || 'Arial' };
    const descriptionStyle = { fontFamily: content_styles?.descriptionFont || 'Arial' };
    const cardBackgroundColor = content_styles?.cardBackgroundColor || '#000';

    return (
            <div className="product-card" style={{ backgroundColor: cardBackgroundColor }}>
                <h2 style={nameStyle}>{name}</h2>
                <p className="price" style={priceStyle}>Rs.{price}</p>
                <p style={descriptionStyle}>{description}</p>
            </div>

    );
}

export default CardUserComponent;
