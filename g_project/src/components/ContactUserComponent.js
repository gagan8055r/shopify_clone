// ContactUserComponent.jsx
import React from 'react';
import './ContactUserComponent.css'
const ContactUserComponent = ({ sellerInfo }) => {
    return (
        <div className="contact-user-component">
            <h3>Seller Information</h3>
            {sellerInfo && (
                <>
                    <p>Name: {sellerInfo.name}</p>
                    <p>Contact Number: {sellerInfo.number}</p>
                    <p>Email: {sellerInfo.email}</p>
                </>
            )}
        </div>
    );
};

export default ContactUserComponent;