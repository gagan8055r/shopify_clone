// import React from 'react';
// import './HomeUserComponent.css'
// const HomeUserComponent = ({storeName}) => {
//     return (
//         <div className="home-user-component">
//             {storeName && (
//                 <>
//                     <p>WELCOME TO {storeName}</p>
//                     <p>Nourishing Your Home with Nature’s Best!😊</p>
//                 </>
//             )}
//         </div>
//     );
// };
//
// export default HomeUserComponent;

import React from 'react';
import './HomeUserComponent.css';  // Adjust import path accordingly

const HomeUserComponent = ({ storeName, storeContents }) => {
    const renderContent = (contentArray) => {
        return contentArray.map((contentItem, index) => {
            switch (contentItem.type) {
                case 'text':
                    return (
                        <div
                            key={index}
                            style={{
                                fontFamily: contentItem.styles.fontFamily,
                                color: contentItem.styles.color,
                                fontSize: contentItem.styles.fontSize,
                            }}
                        >
                            {contentItem.content}
                        </div>
                    );
                case 'image':
                    return (
                        <img
                            key={index}
                            src={contentItem.src}
                            style={{
                                width: contentItem.styles.width,
                                height: contentItem.styles.height,
                            }}
                            alt="content"
                        />
                    );
                default:
                    return null;
            }
        });
    };

    return (
        <div className="home-container">
            <h1>{storeName}</h1>
            <div className="content-container">
                {storeContents.map((contentArray, index) => (
                    <div key={index} className="content-item">
                        {renderContent(contentArray)}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomeUserComponent;
