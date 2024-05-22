// import React from 'react';
// import './ContactComponent.css';
//
// const ContactComponent = () => {
//     return (
//         <div className="contact-container">
//             <h2>Contact Us</h2>
//             <form>
//                 <div className="form-group">
//                     <label htmlFor="name">Name:</label>
//                     <input type="text" id="name" className="form-input" />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="contact">Contact Number:</label>
//                     <input type="tel" id="contact" className="form-input" />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="email">Email Address:</label>
//                     <input type="email" id="email" className="form-input" />
//                 </div>
//                 <button type="submit" className="submit-btn">Submit</button>
//             </form>
//         </div>
//     );
// };
//
// export default ContactComponent;

import React, { useState } from 'react';
import './ContactComponent.css';

const ContactComponent = ({ storeId }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [formStatus, setFormStatus] = useState('');

    // New state for font style and color
    const [nameFontStyle, setNameFontStyle] = useState('Arial');
    const [nameColor, setNameColor] = useState('#000000');
    const [emailFontStyle, setEmailFontStyle] = useState('Arial');
    const [emailColor, setEmailColor] = useState('#000000');
    const [numberFontStyle, setNumberFontStyle] = useState('Arial');
    const [numberColor, setNumberColor] = useState('#000000');
    const [cardBackgroundColor, setCardBackgroundColor] = useState('#ffffff');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const content_sty = JSON.stringify({
            nameFontStyle,
            nameColor,
            emailFontStyle,
            emailColor,
            numberFontStyle,
            numberColor,
            cardBackgroundColor,
        });

        const payload = {
            name,
            email,
            number,
            store_id: storeId,
            content_sty,
        };

        console.log("Payload:", payload);

        try {
            const response = await fetch("https://capital-duck-18.hasura.app/api/rest/create-info", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-hasura-admin-secret": "7qN1gqjjqtf1QXkkW435OMGfAkmbMpSwSMc3EdUtVFnworAdDKosz6k8LB0nuL4v",
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Contact information inserted successfully:", data);
                setFormStatus("success");

                setName("");
                setEmail("");
                setNumber("");

                await fetchAdditionalData(storeId);
            } else {
                const errorData = await response.json();
                console.error("Error inserting contact information:", response.status, errorData);
                setFormStatus("error");
            }
        } catch (error) {
            console.error("Error inserting contact information:", error);
            setFormStatus("error");
        }
    };

    const fetchAdditionalData = async (storeId) => {
        try {
            const response = await fetch(`https://capital-duck-18.hasura.app/api/rest/comb-query?id=${storeId}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "x-hasura-admin-secret": "7qN1gqjjqtf1QXkkW435OMGfAkmbMpSwSMc3EdUtVFnworAdDKosz6k8LB0nuL4v",
                },
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Additional data:", data);
            } else {
                const errorData = await response.json();
                console.error("Error fetching additional data:", response.status, errorData);
            }
        } catch (error) {
            console.error("Error fetching additional data:", error);
        }
    };

    return (
        <div className="contact-container" style={{ backgroundColor: cardBackgroundColor }}>
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
                        style={{ fontFamily: nameFontStyle, color: nameColor }}
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
                        style={{ fontFamily: numberFontStyle, color: numberColor }}
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
                        style={{ fontFamily: emailFontStyle, color: emailColor }}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="nameFontStyle">Name Font Style:</label>
                    <select id="nameFontStyle" value={nameFontStyle} onChange={(e) => setNameFontStyle(e.target.value)}>
                        <option value="Arial">Arial</option>
                        <option value="Times New Roman">Times New Roman</option>
                        <option value="Courier New">Courier New</option>
                        <option value="Georgia">Georgia</option>
                    </select>
                    <label htmlFor="nameColor">Name Color:</label>
                    <input
                        type="color"
                        id="nameColor"
                        value={nameColor}
                        onChange={(e) => setNameColor(e.target.value)}
                    />
                </div>

                {/* Font style, color inputs for Email */}
                <div className="form-group">
                    <label htmlFor="emailFontStyle">Email Font Style:</label>
                    <select id="emailFontStyle" value={emailFontStyle} onChange={(e) => setEmailFontStyle(e.target.value)}>
                        <option value="Arial">Arial</option>
                        <option value="Times New Roman">Times New Roman</option>
                        <option value="Courier New">Courier New</option>
                        <option value="Georgia">Georgia</option>
                    </select>
                    <label htmlFor="emailColor">Email Color:</label>
                    <input
                        type="color"
                        id="emailColor"
                        value={emailColor}
                        onChange={(e) => setEmailColor(e.target.value)}
                    />
                </div>

                {/* Font style, color inputs for Contact Number */}
                <div className="form-group">
                    <label htmlFor="numberFontStyle">Contact Number Font Style:</label>
                    <select id="numberFontStyle" value={numberFontStyle} onChange={(e) => setNumberFontStyle(e.target.value)}>
                        <option value="Arial">Arial</option>
                        <option value="Times New Roman">Times New Roman</option>
                        <option value="Courier New">Courier New</option>
                        <option value="Georgia">Georgia</option>
                    </select>
                    <label htmlFor="numberColor">Contact Number Color:</label>
                    <input
                        type="color"
                        id="numberColor"
                        value={numberColor}
                        onChange={(e) => setNumberColor(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="cardBackgroundColor">Card Background Color:</label>
                    <input
                        type="color"
                        id="cardBackgroundColor"
                        value={cardBackgroundColor}
                        onChange={(e) => setCardBackgroundColor(e.target.value)}
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
