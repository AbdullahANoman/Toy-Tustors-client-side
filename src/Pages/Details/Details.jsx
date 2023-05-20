import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            <p>This is details page</p>
        </div>
    );
};

export default Details;