// import React from 'react';
//
// function Card2({ title, children, onAddClick }) {
//     return (
//         <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '20px', margin: '10px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)' }}>
//             <h2>{title}</h2>
//             {children}
//
//             <button onClick={onAddClick}>Add Card 2</button>
//         </div>
//     );
// }
//
// export default Card2;


// import React from 'react';
// import { Link } from 'react-router-dom';
//
// function Card1({ title, children }) {
//     return (
//         <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '20px', margin: '10px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)' }}>
//             <h2>{title}</h2>
//             {children}
//
//             <Link to="/card1/theme1">
//                 <button>Add Card 1</button>
//             </Link>
//         </div>
//     );
// }
//
// export default Card1;

//
// import React from 'react';
// import './Card1.css'; // Import your CSS file for styling
//
// function Card1({ imageSrc, title, children }) {
//     return (
//         <div className="card1">
//             <img src={imageSrc} alt={title} className="card1-image" />
//             <div className="card1-content">
//                 <h2 className="card1-title">{title}</h2>
//                 <p className="card1-description">{children}</p>
//             </div>
//             <div className="card1-footer">
//                 <link to="/card1/theme1">
//                     <button className="Add-button"> Add Card1</button>
//                 </link>
//             </div>
//         </div>
//     );
// }
//
// export default Card1;



// Card2.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Card2.css'; // Import your CSS file for styling
import imageSrc from '../sample_video/card2.webp'; // Change the image source accordingly

function Card2({ title, children }) {
    return (
        <div className="card2">
            <img src={imageSrc} alt={title} className="card2-image" />
            <div className="card2-content">
                <h2 className="card2-title">{title}</h2>
                <p className="card2-description">{children}</p>
            </div>
            <div className="card2-footer">
                <Link to="/card2/theme1">
                    <button className="Add-button"> Add +</button>
                </Link>
            </div>
        </div>
    );
}

export default Card2;
