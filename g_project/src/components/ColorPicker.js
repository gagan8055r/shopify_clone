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
