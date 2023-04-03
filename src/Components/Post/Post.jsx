import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css'

const Post = ({post}) => {
    // console.log(post);  
    const navigate = useNavigate();
    const {title,body,id} = post;

    const handaleNavigate = ()=>{
        navigate(`/post/${id}`)
    }
    return (
        <div className='post'>
            <h3>Post Number {id}</h3>
            <p>{title}</p>
            <Link to={`/post/${id}`}> Show More Details</Link>
            <button>Show More Details</button>
            <button onClick={handaleNavigate}>Btn handlar</button>
        </div>
    );
};

export default Post;