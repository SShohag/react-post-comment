import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 1000,
  },
  media: {
    height: 140,
  },
});

const Post = (props) => {
    // console.log(props)
    const classes = useStyles();
    const {body, title, id} = props.post;
    return (

        <Card className={classes.root}>
            <CardActionArea>
                <h3 style={{textAlign:'center', color:'#000080'}}> Post No : {id} </h3>
                <CardContent style={{marginLeft:'100px', backgroundColor:'#696969'}}>
                    <Typography style={{color:'#f5f5dc'}} gutterBottom variant="h5" component="h2">{title}
                    </Typography>
                    <Typography style={{color:'lightCyan'}} variant="body2" color="textSecondary" component="p">
                        {body}
                    </Typography>
                    <br/>
                    <Link to={`/post/${id}`} ><Button variant="contained" color="primary">See more</Button></Link>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default Post;