import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment'

const PostDetails = () => {
    const {postId} = useParams();
    const [posts, setPosts] = useState({})
    const [ comments, setComments] = useState([])
    useEffect(()=>{
        const idUrl = `http://jsonplaceholder.typicode.com/posts/${postId}`
        fetch(idUrl)
        .then( res => res.json())
        .then( data => setPosts(data))

    },[]);
    useEffect(()=>{
        const idUrl = `http://jsonplaceholder.typicode.com/comments?postId=${postId}`
        fetch(idUrl)
        .then( res => res.json())
        .then( data => setComments(data))
        
    },[]);
    console.log( comments)
    return (
        <div>
            <h1>The section is post details section</h1>
            <h2> {posts.title} </h2>
            <p> {posts.body} </p>
            {
                comments.map( remark=> <Comment remark={remark}></Comment>)
            }
        </div>
    );
};

export default PostDetails;