import React from 'react';
import { Link } from 'react-router-dom';

const Nomatch = () => {
    return (
        <div style={{textAlign: 'center', marginTop:"200px"}}>
            <h1>Sorry no match</h1>
            <h2 style={{color:'red'}}> Error 404!</h2>
            <p>Please go back<Link to="/home">Home</Link> and try again</p>
        </div>
    );
};

export default Nomatch;