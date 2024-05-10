import React, { useState } from 'react';
import { Landing } from "./components/Landing";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Store } from "./components/Store";
import Theme1 from "./components/Theme1";
// import Header from "./components/Header";


function App() {
    const [announcementText, setAnnouncementText] = useState('');

    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Landing />} />
                    <Route path="/store" element={<Store />} />
                    <Route path="/card1/theme1" element={<Theme1  announcementText={announcementText} setAnnouncementText={setAnnouncementText} />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
