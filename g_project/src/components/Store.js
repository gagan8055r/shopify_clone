import React from 'react';
import Card2 from './Card2'; // Import the Card2 component
import Card1 from "./Card1";
export function Store() {
    return (
        <div>
            <p>hello from create store page</p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>

                <Card1 title="Card 1">
                    <p>This is the content of Card 1.</p>
                </Card1>


                <Card2 title="Card 2">
                    <p>This is the content of Card 2.</p>
                </Card2>
            </div>
        </div>
    );
}

export default Store;
