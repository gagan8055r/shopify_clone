
import React, { useContext } from 'react';

import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import videoBG from "../sample_video/3283810-hd_1280_720_30fps.mp4"; // Import your video source
import './Landing.css'; // Import your CSS file for styling

import UserContext from "./UserContext";
export function Landing() {
    const { loginWithRedirect, logout } = useAuth0();
const {isAuthenticated} = useContext(UserContext);
    const handleCreateStoreClick = () => {
        if (!isAuthenticated) {
            alert("Please log in first.");
        }
    };

    return (
        <div>
            <header className="header">
                <div className="logo-container">
                    <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpqMNrMQuXA5A35Gx_U4hiE3sxLh80UN_yzOmLorPb5g&s" alt="Logo"/>
                </div>
                <div className="Dreams">
                    <h1> DESIGN YOUR OWN DREAMS </h1>
                </div>
                <nav className="nav-links">
                    <ul>
                        {
                            isAuthenticated ? (
                                <>

                                    <li><button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button></li>
                                    <li><Link to="/store-registration"><button onClick={handleCreateStoreClick}>Create your store</button></Link></li>
                                </>
                            ) : (
                                <li><button onClick={() => loginWithRedirect()}>Log In</button></li>
                            )
                        }
                    </ul>
                </nav>
            </header>
            <section className="video-section">
                <div className="video-container">
                    <video autoPlay loop muted>
                        <source src={videoBG} type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                    <div className="video-overlay">
                        <h2>Welcome to Our Website</h2>
                        <p>Sign up now to get started!</p>
                    </div>
                </div>
            </section>
        </div>
    )
}
