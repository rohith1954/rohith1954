import React, { useState } from "react";


function Login() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const handleLoginToggle = () => {
        setIsLoggedIn(!isLoggedIn); // Toggles the value of isLoggedIn
    };

    let content;
    if (isLoggedIn) {
        content = <h1>Welcome, you are logged in</h1>;
    } else {
        content = <h1>Please login to continue...</h1>;
    }

    return (
        <>
            {content}
            <button onClick={handleLoginToggle}>
                {isLoggedIn ? "Logout" : "Login"}
            </button>
        </>
    );
}

export default Login;
