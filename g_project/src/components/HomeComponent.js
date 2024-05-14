import React from 'react';
import './HomeComponent.css';

const HomeComponent = ({ themeData }) => {
    return (
        <div className="home-container">
            <h1 className="home-heading">{themeData?.heading}</h1>
            <p className="home-description">{themeData?.description}</p>
            {themeData?.image_url && <img className="home-image" src={themeData.image_url} alt="Theme" />}
        </div>
    );
};

export default HomeComponent;