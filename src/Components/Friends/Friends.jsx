import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Friends = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <h2>This Is Friends page    </h2>
        </div>
    );
};

export default Friends;