import React from 'react'

 const Purecomponent2 = React.memo(({message}) => {
    
    console.log("component re-rendering")

  return (

    <h1>{message}</h1>
  )
})
export default Purecomponent2