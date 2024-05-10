import React, { useState } from 'react';

function Theme1({ announcementText, setAnnouncementText }) {
    const [isAnnouncementVisible, setIsAnnouncementVisible] = useState(false);
    const [isTemplateVisible, setIsTemplateVisible] = useState(false);
    const [isFooterVisible, setIsFooterVisible] = useState(false);
    const [imageUrl, setImageUrl] = useState('');
    const handleAnnouncementVisibility = () => {
        setIsAnnouncementVisible(prevState => !prevState);
    };

    const handleTemplateVisibility = () => {
        setIsTemplateVisible(prevState => !prevState);
    };

    const handleFooterVisibility = () => {
        setIsFooterVisible(prevState => !prevState);
    };

    const handleAnnouncementChange = (event) => {
        const text = event.target.value;
        setAnnouncementText(text);
    };

    const handleImageUrlChange = (event) => {
        setImageUrl(event.target.value);
    };

    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <div style={{
                width: '25%',
                padding: '20px',
                display: 'flex',
                borderRight: '3px solid #ccc',
                flexDirection: 'column',
                height: '100vh'
            }}>
                <div style={{ position: 'relative' }}>
                    <h3 style={{ cursor: 'pointer' }} onClick={handleAnnouncementVisibility}>
                        <span style={{
                            marginRight: '15px',
                            fontSize: '14px',
                            color: 'rebeccapurple',
                            transform: isAnnouncementVisible ? 'rotate(90deg)' : 'rotate(0deg)',
                            transition: 'transform 0.3s',
                            display: 'inline-block'
                        }}>▶️</span>
                        Announcement Bar
                    </h3>
                    {isAnnouncementVisible && (
                        <div>
                            <input
                                type="text"
                                placeholder="Welcome to the store"
                                value={announcementText}
                                onChange={handleAnnouncementChange}
                                style={{ marginTop: '5px', padding: '5px', borderRadius: '3px', border: '1px solid #ccc' }}
                            />
                        </div>
                    )}
                </div>
                <h3 style={{ cursor: 'pointer' }} onClick={handleTemplateVisibility}>
                    <span style={{
                        marginRight: '15px',
                        fontSize: '14px',
                        color: 'rebeccapurple',
                        transform: isTemplateVisible ? 'rotate(90deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s',
                        display: 'inline-block'
                    }}>▶️</span>
                    Template
                </h3>

                {isTemplateVisible && (
                    <div>
                        <input
                            type="text"
                            placeholder="Enter image URL"
                            value={imageUrl}
                            onChange={handleImageUrlChange}
                            style={{ marginTop: '5px', padding: '5px', borderRadius: '3px', border: '1px solid #ccc' }}
                        />
                    </div>
                )}
                <h3 style={{ cursor: 'pointer' }} onClick={handleFooterVisibility}>
                    <span style={{
                        marginRight: '15px',
                        fontSize: '14px',
                        color: 'rebeccapurple',
                        transform: isFooterVisible ? 'rotate(90deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s',
                        display: 'inline-block'
                    }}>▶️</span>
                    Footer
                </h3>
            </div>

            <div style={{width: '75%', padding: '20px', display: 'flex', flexDirection: 'column', height: '100vh'}}>
                <header style={{marginBottom: '20px'}}>
                    <div style={{marginBottom: '10px',backgroundColor:'aqua'}}>
                        <p style={{textAlign: 'center'}}>{announcementText ? announcementText : 'Welcome to the store'}</p>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px',backgroundColor:'rebeccapurple'}}>
                        <button
                            style={{
                                backgroundColor: '#4CAF50',
                                color: 'white',
                                padding: '10px 20px',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                margin: '0 10px',
                            }}
                        >
                            HOME
                        </button>
                        <button
                            style={{
                                backgroundColor: '#4CAF50',
                                color: 'white',
                                padding: '10px 20px',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                margin: '0 10px',
                            }}
                        >
                            CATALOG
                        </button>
                        <button
                            style={{
                                backgroundColor: '#4CAF50',
                                color: 'white',
                                padding: '10px 20px',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                margin: '0 10px',
                            }}
                        >
                            CONTACT
                        </button>
                    </div>

                </header>

                <div style={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative'
                }}>
                    {isTemplateVisible && imageUrl && (
                        <img
                            src={imageUrl}
                            alt="Template"
                            style={{maxWidth: '1000%', maxHeight: '100%', objectFit: 'contain'}}
                        />
                    )}
                    {isTemplateVisible && !imageUrl && <p>No image provided</p>}

                    {isTemplateVisible && imageUrl && (
                        <div style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)'
                        }}>
            <textarea
                placeholder="Enter text here"
                maxLength={10}
                style={{
                    width: '200px',
                    height: '100px',
                    resize: 'none',
                    padding: '5px',
                    display: "flex",
                    color: 'white',
                    fontSize: '30px',
                    background: 'transparent',
                    alignItems: "center",
                    textAlign: 'center'
                }}
            />
                        </div>
                    )}
                </div>


            </div>
        </div>
    );
}

export default Theme1;


