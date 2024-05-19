import React, { useState } from 'react';
import { useParams} from 'react-router-dom';
import ProductsGrid from './ProductsGrid';
import './LightThemeComponent.css';
import HomeComponent from './HomeComponent';
import ContactComponent from './ContactComponent';

const LightThemeComponent = () => {
    // const location = useLocation();
    // const themeData = location.state?.theme;
    const { storeId } = useParams();
    const [showComponent, setShowComponent] = useState('home');

    const handleComponentClick = (component) => {
        setShowComponent(component);
    };

    return (
        <div>
            <div className="light-theme">
                <div className="button-container">
                    <button onClick={() => handleComponentClick('home')}>Home</button>
                    <button onClick={() => handleComponentClick('catalog')}>Catalog</button>
                    <button onClick={() => handleComponentClick('contact')}>Contact</button>
                </div>
                {showComponent === 'home' && <HomeComponent storeId={storeId} />}
                {showComponent === 'catalog' && <ProductsGrid storeId={storeId} />}
                {showComponent === 'contact' && <ContactComponent storeId={storeId} />}
            </div>
        </div>
    );
};

export default LightThemeComponent;