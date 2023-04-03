import React from 'react';
import { Link } from 'react-router-dom';
import './Post.css'

const Post = ({post}) => {
    // console.log(post);  
    const {title,body,id} = post;
    return (
        <div className='post'>
            <h3>Post Number {id}</h3>
            <p>{title}</p>
            <Link to={`/post/${id}`}> Show More Details</Link>
            <button>Show More Details</button>
        </div>
    );
};

export default Post;