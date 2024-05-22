// import React, { useState } from 'react';
//
// const ColorPickerComponent = ({ onSave }) => {
//     const [primaryColor, setPrimaryColor] = useState('#007bff');
//     const [primaryColorHover, setPrimaryColorHover] = useState('#0056b3');
//     const [secondaryColor, setSecondaryColor] = useState('#6c757d');
//     const [secondaryColorHover, setSecondaryColorHover] = useState('#5a6268');
//
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         onSave({
//             primaryColor,
//             primaryColorHover,
//             secondaryColor,
//             secondaryColorHover
//         });
//     };
//
//     return (
//         <form onSubmit={handleSubmit}>
//             <div>
//                 <label>STORE LOGO COLOR:</label>
//                 <input
//                     type="color"
//                     value={primaryColor}
//                     onChange={(e) => setPrimaryColor(e.target.value)}
//                 />
//             </div>
//             <div>
//                 <label>STORE LOGO COLOR HOVER:</label>
//                 <input
//                     type="color"
//                     value={primaryColorHover}
//                     onChange={(e) => setPrimaryColorHover(e.target.value)}
//                 />
//             </div>
//             {/*<div>*/}
//             {/*    <label>Secondary Color:</label>*/}
//             {/*    <input*/}
//             {/*        type="color"*/}
//             {/*        value={secondaryColor}*/}
//             {/*        onChange={(e) => setSecondaryColor(e.target.value)}*/}
//             {/*    />*/}
//             {/*</div>*/}
//             {/*<div>*/}
//             {/*    <label>Secondary Color Hover:</label>*/}
//             {/*    <input*/}
//             {/*        type="color"*/}
//             {/*        value={secondaryColorHover}*/}
//             {/*        onChange={(e) => setSecondaryColorHover(e.target.value)}*/}
//             {/*    />*/}
//             {/*</div>*/}
//             <button type="submit">Save</button>
//         </form>
//     );
// };
//
// export default ColorPickerComponent;
// import React, { useState } from 'react';
// import { ChromePicker } from 'react-color';
// import './ColorPicker.css';
//
// const ColorPickerComponent = ({ label, color, onColorChange, onSaveColor }) => {
//     const [currentColor, setCurrentColor] = useState(color);
//
//     const handleColorChange = (color) => {
//         setCurrentColor(color.hex);
//         onColorChange(color.hex);
//     };
//
//     const handleSaveColor = () => {
//         onSaveColor(currentColor);
//     };
//
//     return (
//         <div className="color-picker-container">
//             <h3>{label}</h3>
//             <ChromePicker color={currentColor} onChangeComplete={handleColorChange} />
//             <button onClick={handleSaveColor}>Save {label} Color</button>
//         </div>
//     );
// };
//
// export default ColorPickerComponent;

import React from 'react';
import { SketchPicker } from 'react-color';
import './ColorPicker.css';

const ColorPickerComponent = ({ color, onColorChange }) => (
    <div className="color-picker">
        <SketchPicker
            color={color}
            onChangeComplete={(color) => onColorChange(color.hex)}
        />
    </div>
);

export default ColorPickerComponent;

