import { useRef } from "react"


function UncontrolledComponents() {
  const inputRef = useRef();
 
const handleclick = () =>{
    alert(`name is ${inputRef.current.value}`)
}

  return (
    <div>
         <input type="text"  placeholder="enter your name" ref={inputRef}/>
      <button onClick={handleclick}>get input value</button>
    </div>
  )
}

export default UncontrolledComponents
