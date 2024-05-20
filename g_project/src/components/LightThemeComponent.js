//
// // import React, { useState } from 'react';
// // import { useParams, useLocation } from 'react-router-dom';
// // import ProductsGrid from './ProductsGrid';
// // import './LightThemeComponent.css';
// // import HomeComponent from './HomeComponent';
// // import ContactComponent from './ContactComponent';
// //
// // const LightThemeComponent = () => {
// //     const location = useLocation();
// //     const themeData = location.state?.theme;
// //     const { storeId } = useParams();
// //     const [showComponent, setShowComponent] = useState(null);
// //
// //     const handleComponentClick = (component) => {
// //         setShowComponent(component);
// //     };
// //
// //     return (
// //         <div>
// //             <div className="light-theme">
// //                 <div className="button-container">
// //                     <button onClick={() => handleComponentClick('home')}>Home</button>
// //                     <button onClick={() => handleComponentClick('catalog')}>Catalog</button>
// //                     <button onClick={() => handleComponentClick('contact')}>Contact</button>
// //                 </div>
// //                 {showComponent === 'home' && <HomeComponent themeData={themeData} />}
// //                 {showComponent === 'catalog' && <ProductsGrid storeId={storeId} />}
// //                 {showComponent === 'contact' && <ContactComponent />}
// //             </div>
// //         </div>
// //     );
// // };
// //
// // export default LightThemeComponent;
//
// // import React, { useState } from 'react';
// // import { useParams, useLocation } from 'react-router-dom';
// // import ProductsGrid from './ProductsGrid';
// // import './LightThemeComponent.css';
// // import HomeComponent from './HomeComponent';
// // import ContactComponent from './ContactComponent';
// //
// // const LightThemeComponent = () => {
// //     const location = useLocation();
// //     const themeData = location.state?.theme;
// //     const { storeId } = useParams();
// //     const [showComponent, setShowComponent] = useState('home');
// //
// //     const handleComponentClick = (component) => {
// //         setShowComponent(component);
// //     };
// //
// //     return (
// //         <div>
// //             <div className="light-theme">
// //                 <div className="button-container">
// //                     <button onClick={() => handleComponentClick('home')}>Home</button>
// //                     <button onClick={() => handleComponentClick('catalog')}>Catalog</button>
// //                     <button onClick={() => handleComponentClick('contact')}>Contact</button>
// //                 </div>
// //                 {showComponent === 'home' && <HomeComponent themeData={themeData} />}
// //                 {showComponent === 'catalog' && <ProductsGrid storeId={storeId} />}
// //                 {showComponent === 'contact' && <ContactComponent />}
// //             </div>
// //         </div>
// //     );
// // };
// //
// // export default LightThemeComponent;
//
//
// // import React from 'react';
// //
// // const LightTheme = ({ storeName, description, products }) => {
// //     return (
// //         <div className="light-theme">
// //             <header>
// //                 <h1>{storeName}</h1>
// //                 <p>{description}</p>
// //             </header>
// //             <main>
// //                 <h2>Products</h2>
// //                 <ul>
// //                     {products.map((product) => (
// //                         <li key={product.id}>
// //                             <h3>{product.name}</h3>
// //                             <p>{product.description}</p>
// //                             <p>Price: {product.price}</p>
// //                         </li>
// //                     ))}
// //                 </ul>
// //             </main>
// //             <footer>
// //                 {/* Footer content */}
// //             </footer>
// //         </div>
// //     );
// // };
// //
// // export default LightTheme;
//
// // LightTheme.js
// //
// // import React, { useState } from 'react';
// // import { useParams, useLocation } from 'react-router-dom';
// // import ProductsGrid from './ProductsGrid';
// // import './LightThemeComponent.css';
// // import HomeComponent from './HomeComponent';
// // import ContactComponent from './ContactComponent';
// //
// // const LightThemeComponent = () => {
// //     const location = useLocation();
// //     const themeData = location.state?.theme;
// //     const { storeId } = useParams();
// //     const [showComponent, setShowComponent] = useState('home');
// //
// //     const handleComponentClick = (component) => {
// //         setShowComponent(component);
// //     };
// //
// //     return (
// //         <div>
// //             <div className="dark-theme">
// //                 <div className="button-container">
// //                     <button onClick={() => handleComponentClick('home')}>Home</button>
// //                     <button onClick={() => handleComponentClick('catalog')}>Catalog</button>
// //                     <button onClick={() => handleComponentClick('contact')}>Contact</button>
// //                 </div>
// //                 {showComponent === 'home' && <HomeComponent themeData={themeData} />}
// //                 {showComponent === 'catalog' && <ProductsGrid storeId={storeId} />}
// //                 {showComponent === 'contact' && <ContactComponent />}
// //             </div>
// //         </div>
// //     );
// // };
// //
// // export default LightThemeComponent;
// // import React, { useState } from 'react';
// // import { useParams} from 'react-router-dom';
// // import ProductsGrid from './ProductsGrid';
// // import './LightThemeComponent.css';
// // import HomeComponent from './HomeComponent';
// // import ContactComponent from './ContactComponent';
// //
// // const LightThemeComponent = () => {
// //     // const location = useLocation();
// //     // const themeData = location.state?.theme;
// //     const { storeId } = useParams();
// //     const [showComponent, setShowComponent] = useState('home');
// //
// //     const handleComponentClick = (component) => {
// //         setShowComponent(component);
// //     };
// //
// //     return (
// //         <div>
// //             <div className="light-theme">
// //                 <div className="button-container">
// //                     <button onClick={() => handleComponentClick('home')}>Home</button>
// //                     <button onClick={() => handleComponentClick('catalog')}>Catalog</button>
// //                     <button onClick={() => handleComponentClick('contact')}>Contact</button>
// //                 </div>
// //                 {showComponent === 'home' && <HomeComponent storeId={storeId} />}
// //                 {showComponent === 'catalog' && <ProductsGrid storeId={storeId} />}
// //                 {showComponent === 'contact' && <ContactComponent storeId={storeId} />}
// //             </div>
// //         </div>
// //     );
// // };
// //
// // export default LightThemeComponent;
//
//
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import ProductsGrid from './ProductsGrid';
// import './LightThemeComponent.css';
// import HomeComponent from './HomeComponent';
// import ContactComponent from './ContactComponent';
//
// const LightThemeComponent = ({ sellerTheme }) => {
//     const { storeId } = useParams();
//     const [showComponent, setShowComponent] = useState('home');
//
//     useEffect(() => {
//         if (sellerTheme) {
//             document.documentElement.style.setProperty('--primary-color', sellerTheme.primaryColor);
//             document.documentElement.style.setProperty('--primary-color-hover', sellerTheme.primaryColorHover);
//             document.documentElement.style.setProperty('--secondary-color', sellerTheme.secondaryColor);
//             document.documentElement.style.setProperty('--secondary-color-hover', sellerTheme.secondaryColorHover);
//         }
//     }, [sellerTheme]);
//
//     const handleComponentClick = (component) => {
//         setShowComponent(component);
//     };
//
//     return (
//         <div>
//             <div className="light-theme">
//                 <div className="button-container">
//                     <button className="button-primary" onClick={() => handleComponentClick('home')}>Home</button>
//                     <button className="button-secondary" onClick={() => handleComponentClick('catalog')}>Catalog</button>
//                     <button className="button-primary" onClick={() => handleComponentClick('contact')}>Contact</button>
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

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import ProductsGrid from './ProductsGrid';
// import './LightThemeComponent.css';
// import HomeComponent from './HomeComponent';
// import ContactComponent from './ContactComponent';
// import ColorPickerComponent from './ColorPicker';
//
// const LightThemeComponent = () => {
//     const { storeId } = useParams();
//     const [showComponent, setShowComponent] = useState('home');
//     const [sellerTheme, setSellerTheme] = useState({
//         primaryColor: '#007bff',
//         primaryColorHover: '#0056b3',
//         secondaryColor: '#6c757d',
//         secondaryColorHover: '#5a6268'
//     });
//
//     useEffect(() => {
//         if (sellerTheme) {
//             document.documentElement.style.setProperty('--primary-color', sellerTheme.primaryColor);
//             document.documentElement.style.setProperty('--primary-color-hover', sellerTheme.primaryColorHover);
//             document.documentElement.style.setProperty('--secondary-color', sellerTheme.secondaryColor);
//             document.documentElement.style.setProperty('--secondary-color-hover', sellerTheme.secondaryColorHover);
//         }
//     }, [sellerTheme]);
//
//     const handleComponentClick = (component) => {
//         setShowComponent(component);
//     };
//
//     const handleSaveTheme = (theme) => {
//         setSellerTheme(theme);
//     };
//
//     return (
//         <div>
//             <div className="light-theme">
//                 <div className="button-container">
//                     <button className="button-primary" onClick={() => handleComponentClick('home')}>Home</button>
//                     <button className="button-secondary" onClick={() => handleComponentClick('catalog')}>Catalog</button>
//                     <button className="button-primary" onClick={() => handleComponentClick('contact')}>Contact</button>
//                 </div>
//                 {showComponent === 'home' && <HomeComponent storeId={storeId} />}
//                 {showComponent === 'catalog' && <ProductsGrid storeId={storeId} />}
//                 {showComponent === 'contact' && <ContactComponent storeId={storeId} />}
//                 <ColorPickerComponent onSave={handleSaveTheme} />
//             </div>
//         </div>
//     );
// };
//
// export default LightThemeComponent;
//
//
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

