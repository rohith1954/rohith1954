import React from "react";

function DisplayComponent(displayData) {
    console.log("Display component re-rending....");

    return (
        <>
            
    <h1>Name : {displayData}</h1>
    <h1>Email : {displayData}</h1>
    <h1>Password : {displayData}</h1>
        </>
   
    )
    
}

export default DisplayComponent;