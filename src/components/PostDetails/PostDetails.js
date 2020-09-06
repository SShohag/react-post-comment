import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({
  root: {
    maxWidth: 1500,
  },
  media: {
    height: 140,
  },
});

const PostDetails = () => {
    const classes = useStyles();
    const {postId} = useParams();
    const [posts, setPosts] = useState({})
    const [ comments, setComments] = useState([])
    
    useEffect(()=>{
        const idUrl = `https://jsonplaceholder.typicode.com/posts/${postId}`
        fetch(idUrl)
        .then( res => res.json())
        .then( data => setPosts(data))

    },[]);
    useEffect(()=>{
        const idUrl = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
        fetch(idUrl)
        .then( res => res.json())
        .then( data => setComments(data))
        
    },[]);
    // console.log( comments)
    return (
        <div>

            <Card className={classes.root}>
                <CardActionArea>
                    <h3 style={{textAlign:'center', color:'#000080'}}> Post No : {posts.id} </h3>
                    <CardContent style={{margin:'24px', backgroundColor:'#696969'}}>
                        <Typography style={{color:'#f5f5dc'}} gutterBottom variant="h5" component="h2">{posts.title}
                        </Typography>
                        <Typography style={{color:'lightCyan'}} variant="body2" color="textSecondary" component="p">
                        {posts.body}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            {
                comments.map( remark=> <Comment key={remark.id} remark={remark}></Comment>)
            }
        </div>
    );
};

export default PostDetails;