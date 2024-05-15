import React, { useState } from 'react';
import './ContactComponent.css';

const ContactComponent = ({ storeId }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [formStatus, setFormStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        fetch("https://capital-duck-18.hasura.app/api/rest/create-info", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-hasura-admin-secret": "7qN1gqjjqtf1QXkkW435OMGfAkmbMpSwSMc3EdUtVFnworAdDKosz6k8LB0nuL4v",
            },
            body: JSON.stringify({
                name,
                email,
                number,
                store_id: storeId,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                // console.log("Contact information inserted successfully:", data);
                setFormStatus("success");

                setName("");
                setEmail("");
                setNumber("");
            })
            .catch((error) => {
                console.error("Error inserting contact information:", error);
                setFormStatus("error");
            });
    };

    return (
        <div className="contact-container">
            <h2>Contact Us</h2>
            {formStatus === 'success' && <p className="success-message">Contact information submitted successfully!</p>}
            {formStatus === 'error' && <p className="error-message">Error submitting contact information. Please try again.</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        className="form-input"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="contact">Contact Number:</label>
                    <input
                        type="tel"
                        id="contact"
                        className="form-input"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email Address:</label>
                    <input
                        type="email"
                        id="email"
                        className="form-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="submit-btn" disabled={formStatus === 'success'}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ContactComponent;