import React from 'react';
import './Friend.css'

const Friend = ({friend}) => {
    console.log(friend);
    const {name,id,email,phone} = friend;
    return (
        <div className='friend'>
            <h2>{name}</h2>
            <p>email: {email}</p>
            <p>phone: {phone}</p>
        </div>
    );
};

export default Friend;