import React from 'react';
import './ContactComponent.css';

const ContactComponent = () => {
    return (
        <div className="contact-container">
            <h2>Contact Us</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" className="form-input" />
                </div>
                <div className="form-group">
                    <label htmlFor="contact">Contact Number:</label>
                    <input type="tel" id="contact" className="form-input" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email Address:</label>
                    <input type="email" id="email" className="form-input" />
                </div>
                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    );
};

export default ContactComponent;