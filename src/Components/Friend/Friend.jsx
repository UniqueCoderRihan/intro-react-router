import React from 'react';
import './Friend.css'
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    // console.log(friend);
    const {name,id,email,phone} = friend;
    return (
        <div className='friend'>
            <h2>{name}</h2>
            <p>email: {email}</p>
            <p>phone: {phone}</p>
            <Link to={`/friend/${id}`}>Show here details </Link>
        </div>
    );
};

export default Friend;