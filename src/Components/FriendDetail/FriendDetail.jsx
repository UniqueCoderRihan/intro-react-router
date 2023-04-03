import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
    const friendDetails = useLoaderData();
    // console.log(friendDetails);
    const {name,id,username,email,phone,website} = friendDetails;
    return (
        <div>
            <h2>EveryThing Here To Gose</h2>
            <h4>Name: {name}</h4>
            <p>email: {email}</p>
            <p>phone: {phone}</p>
            <p><a href={website}>WebSite Click Here</a> </p>
        </div>
    );
};

export default FriendDetail;