// import React, { useState } from 'react';
// import './ContactComponent.css';
//
// const ContactComponent = ({ storeId }) => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [number, setNumber] = useState('');
//     const [formStatus, setFormStatus] = useState('');
//
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//
//         try {
//             const response = await fetch("https://capital-duck-18.hasura.app/api/rest/create-info", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                     "x-hasura-admin-secret": "7qN1gqjjqtf1QXkkW435OMGfAkmbMpSwSMc3EdUtVFnworAdDKosz6k8LB0nuL4v",
//                 },
//                 body: JSON.stringify({
//                     name,
//                     email,
//                     number,
//                     store_id: storeId,
//                 }),
//             });
//
//             if (response.ok) {
//                 const data = await response.json();
//                 console.log("Contact information inserted successfully:", data);
//                 setFormStatus("success");
//
//                 setName("");
//                 setEmail("");
//                 setNumber("");
//             } else {
//                 console.error("Error inserting contact information:", response.status);
//                 setFormStatus("error");
//             }
//         } catch (error) {
//             console.error("Error inserting contact information:", error);
//             setFormStatus("error");
//         }
//     };
//
//     const fetchAdditionalData = async (storeId) => {
//         try {
//             const response = await fetch(`https://capital-duck-18.hasura.app/api/rest/comb-query?id=${storeId}`, {
//                 method: "GET",
//                 headers: {
//                     "Content-Type": "application/json",
//                     "x-hasura-admin-secret": "7qN1gqjjqtf1QXkkW435OMGfAkmbMpSwSMc3EdUtVFnworAdDKosz6k8LB0nuL4v",
//                 },
//             });
//
//             if (response.ok) {
//                 const data = await response.json();
//                 // Handle the fetched data as needed
//                 console.log("Additional data:", data);
//             } else {
//                 console.error("Error fetching additional data:", response.status);
//             }
//         } catch (error) {
//             console.error("Error fetching additional data:", error);
//         }
//     };
//
//     return (
//         <div className="contact-container">
//             <h2>Contact Us</h2>
//             {formStatus === 'success' && <p className="success-message">Contact information submitted successfully!</p>}
//             {formStatus === 'error' && <p className="error-message">Error submitting contact information. Please try again.</p>}
//             <form onSubmit={handleSubmit}>
//                                 <div className="form-group">
//                                      <label htmlFor="name">Name:</label>
//                                      <input
//                                         type="text"
//                                         id="name"
//                                         className="form-input"
//                                         value={name}
//                                         onChange={(e) => setName(e.target.value)}
//                                         required
//                                     />
//                                 </div>
//                                 <div className="form-group">
//                                     <label htmlFor="contact">Contact Number:</label>
//                                     <input
//                                         type="tel"
//                                         id="contact"
//                                         className="form-input"
//                                         value={number}
//                                         onChange={(e) => setNumber(e.target.value)}
//                                         required
//                                     />
//                                 </div>
//                                 <div className="form-group">
//                                     <label htmlFor="email">Email Address:</label>
//                                     <input
//                                         type="email"
//                                         id="email"
//                                         className="form-input"
//                                         value={email}
//                                         onChange={(e) => setEmail(e.target.value)}
//                                         required
//                                     />
//                                 </div>
//                                 <button type="submit" className="submit-btn" disabled={formStatus === 'success'} onClick={fetchAdditionalData}>
//                                     Submit
//                                 </button>
//
//                             </form>
//         </div>
//     );
// };
//
// export default ContactComponent;

// import React, { useState } from 'react';
// import './ContactComponent.css';
//
// const ContactComponent = ({ storeId }) => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [number, setNumber] = useState('');
//     const [formStatus, setFormStatus] = useState('');
//
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await fetch("https://capital-duck-18.hasura.app/api/rest/create-info", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                     "x-hasura-admin-secret": "7qN1gqjjqtf1QXkkW435OMGfAkmbMpSwSMc3EdUtVFnworAdDKosz6k8LB0nuL4v",
//                 },
//                 body: JSON.stringify({
//                     name,
//                     email,
//                     number,
//                     store_id: storeId,
//                 }),
//             });
//
//             if (response.ok) {
//                 const data = await response.json();
//                 console.log("Contact information inserted successfully:", data);
//                 setFormStatus("success");
//
//                 setName("");
//                 setEmail("");
//                 setNumber("");
//
//                 fetchAdditionalData(storeId);
//             } else {
//                 console.error("Error inserting contact information:", response.status);
//                 setFormStatus("error");
//             }
//         } catch (error) {
//             console.error("Error inserting contact information:", error);
//             setFormStatus("error");
//         }
//     };
//
//     const fetchAdditionalData = async (storeId) => {
//         try {
//             const response = await fetch(`https://capital-duck-18.hasura.app/api/rest/comb-query?id=${storeId}`, {
//                 method: "GET",
//                 headers: {
//                     "Content-Type": "application/json",
//                     "x-hasura-admin-secret": "7qN1gqjjqtf1QXkkW435OMGfAkmbMpSwSMc3EdUtVFnworAdDKosz6k8LB0nuL4v",
//                 },
//             });
//
//             if (response.ok) {
//                 const data = await response.json();
//                 // Handle the fetched data as needed
//                 console.log("Additional data:", data);
//             } else {
//                 console.error("Error fetching additional data:", response.status);
//             }
//         } catch (error) {
//             console.error("Error fetching additional data:", error);
//         }
//     };
//
//     return (
//         <div className="contact-container">
//             <h2>Contact Us</h2>
//             {formStatus === 'success' && <p className="success-message">Contact information submitted successfully!</p>}
//             {formStatus === 'error' && <p className="error-message">Error submitting contact information. Please try again.</p>}
//             <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                     <label htmlFor="name">Name:</label>
//                     <input
//                         type="text"
//                         id="name"
//                         className="form-input"
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="contact">Contact Number:</label>
//                     <input
//                         type="tel"
//                         id="contact"
//                         className="form-input"
//                         value={number}
//                         onChange={(e) => setNumber(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="email">Email Address:</label>
//                     <input
//                         type="email"
//                         id="email"
//                         className="form-input"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <button type="submit" className="submit-btn" disabled={formStatus === 'success'}>
//                     Submit
//                 </button>
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

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Log the payload
        const payload = {
            name,
            email,
            number,
            store_id: storeId,
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

