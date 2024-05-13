import React from 'react';
import './LightThemeComponent.css';

const LightThemeComponent = () => {
    return (
        <div className="light-theme">
            <h2>Light Theme Component</h2>
            <p>This is the component for the Light theme.</p>
            <div className="button-container">
                <button>Home</button>
                <button>Catalog</button>
                <button>Contact</button>
            </div>
        </div>
    );
};

export default LightThemeComponent;
