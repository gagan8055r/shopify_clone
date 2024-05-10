import React, { useState } from 'react';

const CardComponent = ({ product }) => {
    const [price, setPrice] = useState('');
    const [displayPrice, setDisplayPrice] = useState('');
    const [showInput, setShowInput] = useState(true);
  const [showAdd,setShowAdd] = useState(true);
    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    };

    const setAmount = () => {
        setDisplayPrice(price);
        setShowInput(false);
        setShowAdd(false);
    };

    return (
        <div
            style={{
                border: '1px solid #ccc',
                borderRadius: '4px',
                padding: '10px',
                margin: '10px',
                width: '200px',
                height: '250px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
        >
            <div>
                <h3>{product.name}</h3>
                {displayPrice && <p>Rs: {displayPrice}</p>}
            </div>
            <div>
                {showInput && (
                    <input
                        type="text"
                        value={price}
                        onChange={handlePriceChange}
                        placeholder="Enter price"
                        style={{
                            padding: '5px',
                            borderRadius: '3px',
                            border: '1px solid #ccc',
                            fontSize: '16px',
                            width: '80%',
                            textAlign: 'center',
                        }}
                    />
                )}
                {showAdd && (<button onClick={setAmount}>+</button>)}
            </div>
            <div
                style={{
                    backgroundColor: '#f0f0f0',
                    padding: '5px 10px',
                    borderRadius: '4px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                }}
            ></div>
        </div>
    );
};

export default CardComponent;