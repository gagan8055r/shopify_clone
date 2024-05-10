// Store.js

import React from 'react';
import Card2 from './Card2';
import Card1 from './Card1';
import './Store.css';

export function Store() {
    return (
        <div className="store-container">
            <p>Design and Color Your Dreams and Enterprises</p>
            <div className="card-container">
                <Card1 title="THEME-1">
                    <p>This is the is Theme-1</p>
                </Card1>
                <Card2 title="THEME-2">
                    <p>This is the Theme-2.</p>
                </Card2>
            </div>
        </div>
    );
}

export default Store;
