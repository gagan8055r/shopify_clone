import React from "react";

const ThemeOption = ({ theme, onSelect }) => {
    const selectTheme = () => {
        onSelect(theme);
    };

    return (
        <li>
            <button onClick={selectTheme}>{theme.name}</button>
        </li>
    );
};

export default ThemeOption;