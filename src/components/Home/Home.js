import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';

const Home = () => {
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        const postUrl = 'http://jsonplaceholder.typicode.com/posts';
        fetch(postUrl)
        .then( res => res.json())
        .then( data => setPosts(data))
    },[])
    return (
        <div>
            <h1>This is home component </h1>
            <p>Post loaded: {posts.length}</p>

            {
                posts.map( post => <Post post={post}></Post>)
            }
        </div>
    );
};

export default Home;