import React, { PureComponent } from 'react'

class Purecomponent1 extends PureComponent {
  render() {
    
        console.log("component re-rendering")

        return (
             <h1>{this.props.message}</h1>
    )
  }
}
export default Purecomponent1