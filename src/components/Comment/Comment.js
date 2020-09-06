import React from 'react';
import Box from '@material-ui/core/Box';

const defaultProps = {
  bgcolor: 'background.paper',
  p: 1,
  m: 3,
  border: 1,
  style: { width: '1', height: '1/4' },
};
const Comment = (props) => {
    // console.log(props)
    const {name, email, body} = props.remark;
    
    return (
        <Box justifyContent="center">
            <Box borderColor="primary.main" {...defaultProps} >
            <h3> <img style={{borderRadius:'50%', height:'50px', width:'50px', marginTop:'5px'}} src="https://i.ytimg.com/vi/URhwnC6pypo/maxresdefault.jpg" alt=""/>{name} </h3>
            <h4> {email} </h4>
            <p> {body} </p>
            </Box>
        </Box>
    );
};

export default Comment;