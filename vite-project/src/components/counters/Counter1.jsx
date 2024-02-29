
import React,{useState} from 'react'

function Counter1({initialvalue}) {
    const [count,setcount] = useState(initialvalue);


 const handleclick = () => {
      setcount(count+1);
}
  return (
    <div>
      <h1>count:{count}</h1>
      <button onClick={handleclick}>add</button>
    </div>
  )
}

export default Counter1
