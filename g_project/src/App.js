// import React from 'react';
// import { Landing } from "./components/Landing";
// import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
// import ProductsGrid from "./components/ProductsGrid";
// import RegistrationForm from "./components/RegistrationForm";
// import UserContext from "./components/UserContext";
// import { useAuth0 } from "@auth0/auth0-react";
// import DarkThemeComponent from "./components/DarkThemeComponent";
// import LightThemeComponent from "./components/LightThemeComponent";
// import ColorfulThemeComponent from "./components/ColorfulThemeComponent";
// import UserComponent from "./components/UserComponent";
// function App() {
//     const { isAuthenticated, user } = useAuth0();
//     return (
//         <div>
//             <Router>
//
//                 <UserContext.Provider value={{ user, isAuthenticated }}>
//                     <Routes>
//                         <Route exact path="/" element={<Landing />} />
//                         <Route path="/store-registration" element={<RegistrationForm/>} />
//
//                         <Route path="/light-theme/:storeId" element={<LightThemeComponent />} >
//                             <Route path="" element={<ProductsGrid />} />
//                         </Route>
//                         <Route path="/dark-theme/:storeId" element={<DarkThemeComponent />} >
//                             <Route path="" element={<ProductsGrid />} />
//                         </Route>
//                         <Route path="/colorful-theme/:storeId" element={<ColorfulThemeComponent />} >
//                             <Route path="" element={<ProductsGrid />} />
//                         </Route>
//                         <Route path="/:storeId" element={<UserComponent/>}>
//                         </Route>
//                     </Routes>
//                 </UserContext.Provider>
//             </Router>
//         </div>
//     );
// }
//


// export default App;



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
import UserComponent from "./components/UserComponent";
function App() {
    const { isAuthenticated, user } = useAuth0();

    const sellerTheme = {
        primaryColor: "#ff5733",
        primaryColorHover: "#c70039",
        secondaryColor: "#900c3f",
        secondaryColorHover: "#581845"
    };
    return (
        <div>
            <Router>

                <UserContext.Provider value={{ user, isAuthenticated }}>
                    <Routes>
                        <Route exact path="/" element={<Landing />} />
                        <Route path="/store-registration" element={<RegistrationForm/>} />

                        <Route path="/store-edit1/:storeId" element={  <LightThemeComponent/>} >
                            <Route path="" element={<ProductsGrid />} />
                        </Route>
                        <Route path="/store-edit2/:storeId" element={<DarkThemeComponent />} >
                            <Route path="" element={<ProductsGrid />} />
                        </Route>
                        <Route path="/store-edit3/:storeId" element={<ColorfulThemeComponent />} >
                            <Route path="" element={<ProductsGrid />} />
                        </Route>
                        <Route path="/:storeId" element={<UserComponent/>}>
                        </Route>
                    </Routes>
                </UserContext.Provider>
            </Router>
        </div>
    );
}

export default App;


