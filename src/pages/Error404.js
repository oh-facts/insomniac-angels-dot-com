import molly from "../assets/team/molly.png"

import React from 'react';

const NotFound = () => {
    return (
        <div style={{ display:"flex", alignItems:"center",flexDirection:"column"}}>
            <br />

            <h1>404 - Page Not Found</h1>
            <br />
            <br />

            <img src={molly} style={{ width: "20rem"}} />
            
            <br />
            <p>This page doesn't exist. How did you come here. Why did you come here. And when will you leave.</p>
            <br />
            <br />
            This page might be under construction.
            <br />
            <br />
            if that's why you're here, I forgive you.
            <br />
            <br />
        </div>
    );
};

export default NotFound;
