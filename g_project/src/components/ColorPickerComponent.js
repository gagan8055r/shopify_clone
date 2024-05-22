// import React, { useState } from 'react';
//
// const ColorPickerComponent = ({ onSave }) => {
//     const [storeLogoColor, setStoreLogoColor] = useState('#007bff');
//     const [storeLogoHover, setStoreLogoHover] = useState('#0056b3');
//
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         onSave({
//             storeLogoColor,
//             storeLogoHover
//         });
//     };
//
//     return (
//         <form onSubmit={handleSubmit}>
//             <div>
//                 <label>Store Logo Color:</label>
//                 <input
//                     type="color"
//                     value={storeLogoColor}
//                     onChange={(e) => setStoreLogoColor(e.target.value)}
//                 />
//             </div>
//             <div>
//                 <label>Store Logo Hover:</label>
//                 <input
//                     type="color"
//                     value={storeLogoHover}
//                     onChange={(e) => setStoreLogoHover(e.target.value)}
//                 />
//             </div>
//             <button type="submit">Save</button>
//         </form>
//     );
// };
//
// export default ColorPickerComponent;


//
//
// import React, { useState } from 'react';
//
// const ColorPickerComponent = ({ onSave }) => {
//     const [storeLogoColor, setStoreLogoColor] = useState('#007bff');
//     const [storeLogoHover, setStoreLogoHover] = useState('#0056b3');
//
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         onSave({
//             storeLogoColor,
//             storeLogoHover
//         });
//     };
//
//     return (
//         <form onSubmit={handleSubmit}>
//             <div>
//                 <label>Store Logo Color:</label>
//                 <input
//                     type="color"
//                     value={storeLogoColor}
//                     onChange={(e) => setStoreLogoColor(e.target.value)}
//                 />
//             </div>
//             <div>
//                 <label>Store Logo Hover:</label>
//                 <input
//                     type="color"
//                     value={storeLogoHover}
//                     onChange={(e) => setStoreLogoHover(e.target.value)}
//                 />
//             </div>
//             <button type="submit">Save</button>
//         </form>
//     );
// };
//
// export default ColorPickerComponent;





//
// import React, { useState } from 'react';
//
// const ColorPickerComponent = ({ onSave }) => {
//     const [  primaryColor, setPrimaryColor] = useState('#007bff');
//     const [primaryColorHover, setPrimaryColorHover] = useState('#0056b3');
//     const [secondaryColor, setSecondaryColor] = useState('#6c757d');
//     const [secondaryColorHover, setSecondaryColorHover] = useState('#5a6268');
//
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         onSave({
//
//             primaryColor ,
//             primaryColorHover,
//             secondaryColor,
//             secondaryColorHover
//
//
//
//         });
//     };
//
//     return (
//         <form onSubmit={handleSubmit}>
//             <div>
//                 <label>Store logo Color:</label>
//                 <input
//                     type="color"
//                     value={ store_logo_color}
//                     onChange={(e) => setPrimaryColor(e.target.value)}
//                 />
//             </div>
//             <div>
//                 <label>Store logo Color Hover:</label>
//                 <input
//                     type="color"
//                     value={store_logo_hover_color}
//                     onChange={(e) => setPrimaryColorHover(e.target.value)}
//                 />
//             </div>
//             <div>
//                 <label>Secondary Color:</label>
//                 <input
//                     type="color"
//                     value={secondaryColor}
//                     onChange={(e) => setSecondaryColor(e.target.value)}
//                 />
//             </div>
//             <div>
//                 <label>Secondary Color Hover:</label>
//                 <input
//                     type="color"
//                     value={secondaryColorHover}
//                     onChange={(e) => setSecondaryColorHover(e.target.value)}
//                 />
//             </div>
//             <button type="submit">Save</button>
//         </form>
//     );
// };

// export default ColorPickerComponent;
//
import React, { useState } from 'react';

const ColorPickerComponent = ({ onSave }) => {
    const [primaryColor, setPrimaryColor] = useState('#007bff');
    const [primaryColorHover, setPrimaryColorHover] = useState('#0056b3');
    const [secondaryColor, setSecondaryColor] = useState('#6c757d');
    const [secondaryColorHover, setSecondaryColorHover] = useState('#5a6268');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({
            primaryColor,
            primaryColorHover,
            secondaryColor,
            secondaryColorHover
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Primary Color:</label>
                <input
                    type="color"
                    value={primaryColor}
                    onChange={(e) => setPrimaryColor(e.target.value)}
                />
            </div>
            <div>
                <label>Primary Color Hover:</label>
                <input
                    type="color"
                    value={primaryColorHover}
                    onChange={(e) => setPrimaryColorHover(e.target.value)}
                />
            </div>
            <div>
                <label>Secondary Color:</label>
                <input
                    type="color"
                    value={secondaryColor}
                    onChange={(e) => setSecondaryColor(e.target.value)}
                />
            </div>
            <div>
                <label>Secondary Color Hover:</label>
                <input
                    type="color"
                    value={secondaryColorHover}
                    onChange={(e) => setSecondaryColorHover(e.target.value)}
                />
            </div>
            <button type="submit">Save</button>
        </form>
    );
};

export default ColorPickerComponent;

//
// import React from 'react';
// import { SketchPicker } from 'react-color';
// import './ColorPicker.css';
//
// const ColorPickerComponent = ({ color, onColorChange }) => (
//     <div className="color-picker">
//         <SketchPicker
//             color={color}
//             onChangeComplete={(color) => onColorChange(color.hex)}
//         />
//     </div>
// );
//
// export default ColorPickerComponent;
//
//

