
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