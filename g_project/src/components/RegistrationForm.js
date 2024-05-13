import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import ThemeModal from './ThemeModal';
import UserContext from './UserContext';

const RegistrationForm = ({ userName }) => {
    const { user } = useContext(UserContext);
    const [storeName, setStoreName] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTheme, setSelectedTheme] = useState();
    const navigate = useNavigate(); // Use useNavigate instead of useHistory

    const handleStoreNameChange = (event) => {
        setStoreName(event.target.value);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = (theme) => {
        setIsModalOpen(false);
        if (theme) {
            setSelectedTheme(theme.id);
        }
    };

    const handleStoreNameSubmit = async (event) => {
        event.preventDefault();
        const url = 'https://capital-duck-18.hasura.app/api/rest/create-store';

        const data = {
            store_name: storeName,
            theme_id: selectedTheme,
            user_email: user.name,
        };

        const headers = {
            'Content-Type': 'application/json',
            'x-hasura-admin-secret':
                '7qN1gqjjqtf1QXkkW435OMGfAkmbMpSwSMc3EdUtVFnworAdDKosz6k8LB0nuL4v',
        };

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers,
                body: JSON.stringify(data),
            });

            if (response.ok) {
                console.log('Store details saved successfully!');
                const storeData = await response.json();
                console.log(storeData)
                const storeId = storeData.insert_stores_one.id;
                console.log(storeId)
                navigateToTheme(selectedTheme, storeId);
            } else {
                console.error('Error saving store details:', await response.text());
            }
        } catch (error) {
            console.error('Error sending request:', error);
        }
    };

    const navigateToTheme = (themeId, storeId) => {
        switch (themeId) {
            case 1:
                navigate(`/light-theme`);
                break;
            case 2:
                navigate(`/dark-theme`);
                break;
            case 3:
                navigate(`/colorful-theme`);
                break;
            default:
                break;
        }
    };

    return (
        <div>
            <h1>Register Your Store</h1>
            <form onSubmit={handleStoreNameSubmit}>
                <label>
                    Store Name:
                    <input type="text" value={storeName} onChange={handleStoreNameChange} />
                </label>
                <button type="button" onClick={openModal}>
                    Choose Theme
                </button>
                {selectedTheme && <p>Theme "{selectedTheme}" has been selected!</p>}
                <button type="submit">Next</button>
            </form>
            {isModalOpen && <ThemeModal closeModal={closeModal} />}
        </div>
    );
};

export default RegistrationForm;