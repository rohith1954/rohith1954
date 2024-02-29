import { useState } from "react"


function ControlledComponents() {
    const[name, setName] = useState('');
    
    const handlechange =(e)=>{
     console.log("value:", e.target.value);

     setName(e.target.value);
    }

    const handlebuttonclick = () => {
      alert(`name is ${name}`);
    }

  return (
    <div>
      <input type="text"  placeholder="enter your name" onChange={handlechange}/>
      <button onClick={handlebuttonclick}>get input value</button>
    </div>
  )
}

export default ControlledComponents
