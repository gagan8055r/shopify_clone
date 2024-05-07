import React, { useState } from 'react';

function Theme1({ announcementText, setAnnouncementText }) {
    const [isInputVisible, setIsInputVisible] = useState(false);

    const handleInputChange = (event) => {
        const text = event.target.value;
        setAnnouncementText(text);
    };

    const toggleInputVisibility1 = () => {
        setIsInputVisible(prevState => !prevState);
    };const toggleInputVisibility2 = () => {
        setIsInputVisible(prevState => !prevState);
    };

    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <div style={{ width: '25%', borderRight: '1px solid #ccc', padding: '20px' }}>
                <div style={{ position: 'relative' }}>

                    <h3 style={{cursor: 'pointer'}} onClick={toggleInputVisibility1}>
                        <span style={{
                            marginRight: '15px',
                            fontSize: '14px',
                            color: 'rebeccapurple',
                            transform: isInputVisible ? 'rotate(90deg)' : 'rotate(0deg)',
                            transition: 'transform 0.3s',
                            display: 'inline-block'
                        }}>▶️</span>
                        Announcement Bar
                        {/*<span style={{ marginRight: '15px', fontSize: '14px', color: 'rebeccapurple', transform: isInputVisible ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.3s', display: 'inline-block' }}>></span>*/}
                    </h3>
                    {isInputVisible && (
                        <div>
                            <input
                                type="text"
                                placeholder="Enter announcement text"
                                value={announcementText}
                                onChange={handleInputChange}
                                style={{ marginTop: '5px', padding: '5px', borderRadius: '3px', border: '1px solid #ccc' }}
                            />
                        </div>
                    )}
                </div>
                <h3 style={{cursor: 'pointer'}} onClick={toggleInputVisibility2}>
                        <span style={{
                            marginRight: '15px',
                            fontSize: '14px',
                            color: 'rebeccapurple',
                            transform: isInputVisible ? 'rotate(90deg)' : 'rotate(0deg)',
                            transition: 'transform 0.3s',
                            display: 'inline-block'
                        }}>▶️</span>
                    header
                    {/*<span style={{ marginRight: '15px', fontSize: '14px', color: 'rebeccapurple', transform: isInputVisible ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.3s', display: 'inline-block' }}>></span>*/}
                </h3>
                <div>
                    <p>Template</p>
                    {/* Place your template component here */}
                </div>
                <div>
                    <p>Footer</p>
                    {/* Place your footer component here */}
                </div>
            </div>

            {/* Right column */}
            <div style={{width: '75%', padding: '20px'}}>
                <header style={{marginBottom: '20px'}}>
                    <div style={{marginBottom: '10px'}}>
                        <p style={{textAlign: 'center'}}>{announcementText ? announcementText : 'Welcome to the  store'}</p>
                    </div>
                    {/*<h1>Announcement Bar</h1>*/}
                    <div>
                        <h1>Header</h1>
                        {/* Place your header component here */}
                    </div>
                </header>

                <div>
                    <h2>Footer</h2>
                    {/* Place your footer component here */}
                </div>
            </div>
        </div>
    );
}

export default Theme1;
