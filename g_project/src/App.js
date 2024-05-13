import React from 'react';
import { Landing } from "./components/Landing";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductsGrid from "./components/StoreForm";
import RegistrationForm from "./components/RegistrationForm ";
import UserContext from "./components/UserContext";
import { useAuth0 } from "@auth0/auth0-react";
import DarkThemeComponent from "./components/DarkThemeComponent";
import LightThemeComponent from "./components/LightThemeComponent";
import ColorfulThemeComponent from "./components/ColorfulThemeComponent";

function App() {
    const { isAuthenticated, user } = useAuth0();
    return (
        <div>
            <Router>
                <UserContext.Provider value={{ user, isAuthenticated }}>
                    <Routes>
                        <Route exact path="/" element={<Landing />} />
                        <Route path="/store-registration" element={<RegistrationForm/>} />
                        <Route path="/store-theme" element={<ProductsGrid />} />
                        <Route path="/light-theme" element={<LightThemeComponent />} />
                        <Route path="/dark-theme" element={<DarkThemeComponent />} />
                        <Route path="/colorful-theme" element={<ColorfulThemeComponent />} />
                    </Routes>
                </UserContext.Provider>
            </Router>
        </div>
    );
}

export default App;