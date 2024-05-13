import React from 'react';
import './DarkThemeComponent.css';

const DarkThemeComponent = () => {
    return (
        <div className="dark-theme">
            <h2>Dark Theme Component</h2>
            <p>This is the component for the Dark theme.</p>
            <div className="button-container">
                <button>Home</button>
                <button>Catalog</button>
                <button>Contact</button>
            </div>
        </div>
    );
};

export default DarkThemeComponent;