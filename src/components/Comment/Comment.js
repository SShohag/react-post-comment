import React from 'react';

const Comment = (props) => {
    console.log(props)
    const {name, email, body} = props.remark;
    return (
        <div>
            <h4> {name} </h4>
            <p> {email} </p>
            <p> {body} </p>
        </div>
    );
};

export default Comment;