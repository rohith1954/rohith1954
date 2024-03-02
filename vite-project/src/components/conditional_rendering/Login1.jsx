import React ,{useState} from "react";

function Login1(){
    const[isLoggedIn,setIsLoggedIn]= useState(true);

    return(
        <>
        {isLoggedIn ?(<h1>Welcome,You are logged in</h1>):(<h1>Please login to continue...</h1>)}
        </>
    )
}
export default Login1;