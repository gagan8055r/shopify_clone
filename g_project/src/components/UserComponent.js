
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import HomeUserComponent from './HomeUserComponent';
import CardUserComponent from './CardUserComponent';
import ContactUserComponent from './ContactUserComponent';
import './UserComponent.css';

function UserComponent() {
    const { storeId } = useParams();
    const [additionalData, setAdditionalData] = useState(null);
    const [activeComponent, setActiveComponent] = useState('home');

    useEffect(() => {
        fetchAdditionalData(storeId);
    }, [storeId]);

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
                setAdditionalData(data);
                console.log(data);
            } else {
                console.error("Error fetching additional data:", response.status);
            }
        } catch (error) {
            console.error("Error fetching additional data:", error);
        }
    };

    const handleComponentChange = (component) => {
        setActiveComponent(component);
    };

    const getParsedContent = () => {
        if (additionalData) {
            const { store_contents } = additionalData.stores_by_pk;
            return store_contents.map(contentObj => JSON.parse(contentObj.content));
        }
        return [];
    };

    return (
        <div className="user-component">
            <div className="button-container">
                <button onClick={() => handleComponentChange('home')}>Home</button>
                <button onClick={() => handleComponentChange('catalog')}>Catalog</button>
                <button onClick={() => handleComponentChange('contact')}>Contact</button>
            </div>
            {additionalData ? (
                <>
                    {activeComponent === 'home' && (
                        <HomeUserComponent
                            storeName={additionalData.stores_by_pk.name}
                            storeContents={getParsedContent()}
                        />
                    )}
                    {activeComponent === 'catalog' && (
                        <div className="card-container">
                            {additionalData.stores_by_pk.store_product.map((product) => (
                                <CardUserComponent key={product.id} product={product} />
                            ))}
                        </div>
                    )}
                    {activeComponent === 'contact' && (
                        <ContactUserComponent
                            sellerInfo={additionalData.stores_by_pk.store_info[0]}
                        />
                    )}
                </>
            ) : (
                <p>Loading additional data...</p>
            )}
        </div>
    );
}

export default UserComponent;