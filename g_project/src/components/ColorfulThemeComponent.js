// import React from 'react';
// import './ColorfulThemeComponent.css';
//
// const ColorfulThemeComponent = () => {
//     return (
//         <div className="colorful-theme">
//             <h2>Colorful Theme Component</h2>
//             <p>This is the component for the Colorful theme.</p>
//             <div className="button-container">
//                 <button>Home</button>
//                 <button>Catalog</button>
//                 <button>Contact</button>
//             </div>
//         </div>
//     );
// };
//
// export default ColorfulThemeComponent;



import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import ProductsGrid from './ProductsGrid';
import './LightThemeComponent.css';
import HomeComponent from './HomeComponent';
import ContactComponent from './ContactComponent';

const ColorfulThemeComponent = () => {
    const location = useLocation();
    const themeData = location.state?.theme;
    const { storeId } = useParams();
    const [showComponent, setShowComponent] = useState('home');

    const handleComponentClick = (component) => {
        setShowComponent(component);
    };

    return (
        <div>
            <div className="colorful-theme">
                <div className="button-container">
                    <button onClick={() => handleComponentClick('home')}>Home</button>
                    <button onClick={() => handleComponentClick('catalog')}>Catalog</button>
                    <button onClick={() => handleComponentClick('contact')}>Contact</button>
                </div>
                {showComponent === 'home' && <HomeComponent themeData={themeData} />}
                {showComponent === 'catalog' && <ProductsGrid storeId={storeId} />}
                {showComponent === 'contact' && <ContactComponent />}
            </div>
        </div>
    );
};
export default ColorfulThemeComponent;