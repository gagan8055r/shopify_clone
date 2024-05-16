import React from 'react';
import { Landing } from "./components/Landing";
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import ProductsGrid from "./components/ProductsGrid";
import RegistrationForm from "./components/RegistrationForm";
import UserContext from "./components/UserContext";
import { useAuth0 } from "@auth0/auth0-react";
import DarkThemeComponent from "./components/DarkThemeComponent";
import LightThemeComponent from "./components/LightThemeComponent";
import ColorfulThemeComponent from "./components/ColorfulThemeComponent";
import SellerWebsite from "./components/SellerWebsite";
// import CraftEditor from "./components/CraftEditor";
// import Toolbox from "./components/Toolbox";
// import EditorWrapper from "./components/Editorwrapper";

function App() {
    const { isAuthenticated, user } = useAuth0();
    return (
        <div>
            {/*<PreviewProvider>*/}
            <Router>

                <UserContext.Provider value={{ user, isAuthenticated }}>
                    <Routes>
                        <Route exact path="/" element={<Landing />} />
                        <Route path="/store-registration" element={<RegistrationForm/>} />

                        <Route path="/light-theme/:storeId" element={<LightThemeComponent />} >
                            <Route path="" element={<ProductsGrid />} />
                        </Route>
                        <Route path="/dark-theme/:storeId" element={<DarkThemeComponent />} >
                            <Route path="" element={<ProductsGrid />} />
                        </Route>
                        <Route path="/colorful-theme/:storeId" element={<ColorfulThemeComponent />} >
                            <Route path="" element={<ProductsGrid />} />
                        </Route>
                        <Route path="/store/:storeId" element={<SellerWebsite />} />
                    </Routes>
                </UserContext.Provider>
            </Router>
            {/*<CraftEditor />*/}
            {/*<EditorWrapper />*/}

            {/*</PreviewProvider>*/}
        </div>
    );
}

export default App;
