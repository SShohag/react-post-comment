import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const Post = (props) => {
    console.log(props)
    const {body, title, id} = props.post;
    return (
        <div>
            {/* <h1>This is post Component</h1> */}
            <h2> {title} </h2>
            <p> {body} </p>
            <br/>
            <Link to={`/post/${id}`} ><Button variant="contained" color="primary">See more</Button></Link>
            
        </div>
    );
};

export default Post;