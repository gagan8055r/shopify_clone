// import React from "react";
// import ThemeOption from "./ThemeOption";
// import './ThemeModal.css'; // Import the CSS file
//
// const themes = [
//     { id: 1, name: "Light" },
//     { id: 2, name: "Dark" },
//     { id: 3, name: "Colorful" },
// ];
//
// const ThemeModal = ({ closeModal }) => {
//     return (
//         <div className="modal">
//             <div className="modal-content">
//                 <h2>Select a Theme</h2>
//                 <ul>
//                     {themes.map((theme) => (
//                         <ThemeOption key={theme.id} theme={theme} onSelect={closeModal} />
//                     ))}
//                 </ul>
//                 <button onClick={() => closeModal()}>Close</button>
//             </div>
//         </div>
//     );
// };
//
// export default ThemeModal;

import React from "react";
import ThemeOption from "./ThemeOption";
import './ThemeModal.css';

const themes = [
    { id: 1, name: "Light" },
    { id: 2, name: "Dark" },
    { id: 3, name: "Colorful" },
];

const ThemeModal = ({ closeModal }) => {
    const handleThemeSelect = (theme) => {
        closeModal(theme);
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Select a Theme</h2>
                <ul>
                    {themes.map((theme) => (
                        <ThemeOption key={theme.id} theme={theme} onSelect={handleThemeSelect} />
                    ))}
                </ul>
                <button onClick={() => closeModal()}>Close</button>
            </div>
        </div>
    );
};

export default ThemeModal;
