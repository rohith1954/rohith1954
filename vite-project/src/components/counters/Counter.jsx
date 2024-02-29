import React, { Component } from "react"

 class Counter extends Component {
    constructor (props){
     super(props);
     this.state ={count: props.initialvalue};
    }
  increment = ()=>{
    this.setState({count: this.state.count + 1 });
  }
   
  render() {
    return (
      <div>
        <h1>count: {this.state.count}</h1>
        <button onClick={this.increment}>add</button>
      </div>
    )
  }
}
export default Counter;