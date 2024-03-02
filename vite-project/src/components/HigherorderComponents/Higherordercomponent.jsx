import React from 'react'

function Higherordercomponent() {
  return  function ({text, ...restProps}){
    const UpperCaseTest= text.toUppercase
  }

  return  <WrappedComponents text={UpperCaseTest}{...restProps}/>

  
}

export default Higherordercomponent;
