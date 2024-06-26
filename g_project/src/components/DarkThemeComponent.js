// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import ProductsGrid from './ProductsGrid';
// import './DarkThemeComponent.css';
// import HomeComponent from "./HomeComponent";
// import ContactComponent from "./ContactComponent";
//
// const DarkThemeComponent = () => {
//     const { storeId } = useParams();
//     const [showComponent, setShowComponent] = useState(null);
//
//     const handleComponentClick = (component) => {
//         setShowComponent(component);
//     };
//
//     return (
//         <div className="dark-theme">
//             <h2>Dark Theme Component</h2>
//             <div className="button-container">
//                 <button onClick={() => handleComponentClick('home')}>Home</button>
//                 <button onClick={() => handleComponentClick('catalog')}>Catalog</button>
//                 <button onClick={() => handleComponentClick('contact')}>Contact</button>
//             </div>
//             {showComponent === 'home' && <HomeComponent />}
//             {showComponent === 'catalog' && <ProductsGrid storeId={storeId} />}
//             {showComponent === 'contact' && <ContactComponent />}
//         </div>
//     );
// };
//
// export default DarkThemeComponent;
//
//




import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import ProductsGrid from './ProductsGrid';
import './LightThemeComponent.css';
import HomeComponent from './HomeComponent';
import ContactComponent from './ContactComponent';

const DarkThemeComponent = () => {
    const location = useLocation();
    const themeData = location.state?.theme;
    const { storeId } = useParams();
    const [showComponent, setShowComponent] = useState('home');

    const handleComponentClick = (component) => {
        setShowComponent(component);
    };

    return (
        <div>
            <div className="dark-theme">
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
export default DarkThemeComponent;