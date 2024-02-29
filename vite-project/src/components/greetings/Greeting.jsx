import React, { Component } from "react";

class Greeting extends Component{
    render(){
        return <h1>hello {this.props.name} iam a  class component</h1>
    }
}
export default Greeting;