import React from 'react';
import './ColorfulThemeComponent.css';

const ColorfulThemeComponent = () => {
    return (
        <div className="colorful-theme">
            <h2>Colorful Theme Component</h2>
            <p>This is the component for the Colorful theme.</p>
            <div className="button-container">
                <button>Home</button>
                <button>Catalog</button>
                <button>Contact</button>
            </div>
        </div>
    );
};

export default ColorfulThemeComponent;