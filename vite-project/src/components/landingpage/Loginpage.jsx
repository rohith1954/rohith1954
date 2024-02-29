import React, { Component } from 'react'

 class Loginpage extends Component {
    handleLogin = () => {
     const username = document.getElementById('emailAddress').value;
     const password = document.getElementById('password').value;
     console.log("emailAddress:",emailAddress);
     console.log("password:",password);
     alert(`emailAddress: ${emailAddress}, password: ${password}`)

    }
  render() {
    return (
      <div>
        <h1>Login</h1>
        <input type="text" id='emailAddress' placeholder='emailAddress' />
        <br />
        <input type="text" id='password' placeholder='password' />
        <br />
        <button onClick={this.handleLogin}>Login</button>
      </div>
    );
  }
}
export default Loginpage