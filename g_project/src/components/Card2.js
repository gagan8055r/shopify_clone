import React from 'react';

function Card2({ title, children, onAddClick }) {
    return (
        <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '20px', margin: '10px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)' }}>
            <h2>{title}</h2>
            {children}

            <button onClick={onAddClick}>Add Card 2</button>
        </div>
    );
}

export default Card2;
