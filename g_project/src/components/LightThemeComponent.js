// import React, { useState } from 'react';
// import { useParams} from 'react-router-dom';
// import ProductsGrid from './ProductsGrid';
// import './LightThemeComponent.css';
// import HomeComponent from './HomeComponent';
// import ContactComponent from './ContactComponent';
//
// const LightThemeComponent = () => {
//     // const location = useLocation();
//     // const themeData = location.state?.theme;
//     const { storeId } = useParams();
//     const [showComponent, setShowComponent] = useState('home');
//
//     const handleComponentClick = (component) => {
//         setShowComponent(component);
//     };
//
//     return (
//         <div>
//             <div className="light-theme">
//                 <div className="button-container">
//                     <button onClick={() => handleComponentClick('home')}>Home</button>
//                     <button onClick={() => handleComponentClick('catalog')}>Catalog</button>
//                     <button onClick={() => handleComponentClick('contact')}>Contact</button>
//                 </div>
//                 {showComponent === 'home' && <HomeComponent storeId={storeId} />}
//                 {showComponent === 'catalog' && <ProductsGrid storeId={storeId} />}
//                 {showComponent === 'contact' && <ContactComponent storeId={storeId} />}
//             </div>
//         </div>
//     );
// };
//
// export default LightThemeComponent;




import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductsGrid from './ProductsGrid';
import './LightThemeComponent.css';
import HomeComponent from './HomeComponent';
import ContactComponent from './ContactComponent';

const LightThemeComponent = () => {
    const { storeId } = useParams();
    const [showComponent, setShowComponent] = useState('home');
    const [sellerTheme, setSellerTheme] = useState({
        primaryColor: '#007bff',
        primaryColorHover: '#0056b3',
        secondaryColor: '#6c757d',
        secondaryColorHover: '#5a6268'
    });

    useEffect(() => {
        if (sellerTheme) {
            document.documentElement.style.setProperty('--primary-color', sellerTheme.primaryColor);
            document.documentElement.style.setProperty('--primary-color-hover', sellerTheme.primaryColorHover);
            document.documentElement.style.setProperty('--secondary-color', sellerTheme.secondaryColor);
            document.documentElement.style.setProperty('--secondary-color-hover', sellerTheme.secondaryColorHover);
        }
    }, [sellerTheme]);

    const handleComponentClick = (component) => {
        setShowComponent(component);
    };

    const handleSaveTheme = (theme) => {
        setSellerTheme(theme);
    };

    return (
        <div>
            <div className="light-theme">
                <div className="button-container">
                    <button className="button-primary" onClick={() => handleComponentClick('home')}>Home</button>
                    <button className="button-primary" onClick={() => handleComponentClick('catalog')}>Catalog</button>
                    <button className="button-primary" onClick={() => handleComponentClick('contact')}>Contact</button>
                </div>
                {showComponent === 'home' && <HomeComponent storeId={storeId} />}
                {showComponent === 'catalog' && <ProductsGrid storeId={storeId} />}
                {showComponent === 'contact' && <ContactComponent storeId={storeId} />}
            </div>
        </div>
    );
};

export default LightThemeComponent;