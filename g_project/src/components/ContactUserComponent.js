// // ContactUserComponent.jsx
// import React from 'react';
// import './ContactUserComponent.css'
// const ContactUserComponent = ({ sellerInfo }) => {
//     return (
//         <div className="contact-user-component">
//             <h3>Seller Information</h3>
//             {sellerInfo && (
//                 <>
//                     <p>Name: {sellerInfo.name}</p>
//                     <p>Contact Number: {sellerInfo.number}</p>
//                     <p>Email: {sellerInfo.email}</p>
//                 </>
//             )}
//         </div>
//     );
// };
//
// export default ContactUserComponent;

// import React from 'react';
// import './ContactUserComponent.css';
//
// const ContactUserComponent = ({ sellerInfo }) => {
//     const { name, number, email, content_sty } = sellerInfo;
//
//     const nameStyle = {
//         fontFamily: content_sty?.nameFontStyle || 'Arial',
//         color: content_sty?.nameColor || '#000',
//     };
//
//     const numberStyle = {
//         fontFamily: content_sty?.numberFontStyle || 'Arial',
//         color: content_sty?.numberColor || '#000',
//     };
//
//     const emailStyle = {
//         fontFamily: content_sty?.emailFontStyle || 'Arial',
//         color: content_sty?.emailColor || '#000',
//     };
//
//     return (
//         <div className="contact-user-component">
//             <h3>Seller Information</h3>
//             {sellerInfo && (
//                 <>
//                     <p style={nameStyle}>Name: {name}</p>
//                     <p style={numberStyle}>Contact Number: {number}</p>
//                     <p style={emailStyle}>Email: {email}</p>
//                 </>
//             )}
//         </div>
//     );
// };

// export default ContactUserComponent;
import React from 'react';
import './ContactUserComponent.css';

const ContactUserComponent = ({ sellerInfo }) => {
    const { name, number, email, content_sty = {} } = sellerInfo || {};
    const { nameFontStyle, nameColor, numberFontStyle, numberColor, emailFontStyle, emailColor,cardBackgroundColor } = content_sty || {};

    const nameStyle = {
        fontFamily: nameFontStyle || 'Arial',
        color: nameColor || '#000',
    };

    const numberStyle = {
        fontFamily: numberFontStyle || 'Arial',
        color: numberColor || '#000',
    };

    const emailStyle = {
        fontFamily: emailFontStyle || 'Arial',
        color: emailColor || '#000',
    };
    return (
        <div className="contact-user-component" style={{backgroundColor: cardBackgroundColor}}>
            <h3>Seller Information</h3>
            {sellerInfo && (
                <>
                    <p style={nameStyle}>Name: {name}</p>
                    <p style={numberStyle}>Contact Number: {number}</p>
                    <p style={emailStyle}>Email: {email}</p>
                </>
            )}
        </div>
    );
};

export default ContactUserComponent;
