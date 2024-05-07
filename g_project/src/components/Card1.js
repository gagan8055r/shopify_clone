import React from 'react';
import { Link } from 'react-router-dom';

function Card1({ title, children }) {
    return (
        <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '20px', margin: '10px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)' }}>
            <h2>{title}</h2>
            {children}

            <Link to="/card1/theme1">
                <button>Add Card 1</button>
            </Link>
        </div>
    );
}

export default Card1;
