import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './PostDetails.css'

const PostDetails = () => {
    const details = useLoaderData();
    console.log(details);
    const {title,body,id} = details;
    return (
        <div className='postDetails'>
            <h2>About Post details Here </h2>
            <h3>Post Id: {id}</h3>
            <h4>{title}</h4>
            <p>{body}</p>
        </div>
    );
};

export default PostDetails;