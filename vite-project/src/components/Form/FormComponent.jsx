import React,{useState} from "react";


function FormComponent({onsubmit}) {

    console.log("parent re-rending...");

    const [inputData, setInputData] = useState({
        name : '',
        email :'',
        password: '',
    });

    const handleInputChange = (e)=>{
        e.preventDefault();

        if (e.target.name === "name") {

            setInputData({
                ...inputData,
                name : e.target.value,
            });
        }
        if (e.target.name="email") {

            setInputData({
                ...inputData,
                email : e.target.value, 
            });
            
        }
        if (e.target.name === "password") {

            setInputData({
                ...inputData,
                password : e.target.value,
            })
            
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onsubmit(inputData);
    }
    
    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="text"  name="name" placeholder="Enter your name" onChange={handleInputChange}/>
            <input type="email" name="email" placeholder="Enter your email" onClick={handleInputChange}/>
            <input type="password" name="password" placeholder="password" />
            <input type="submit" value="Submit" />
        </form>
        </>
    )
}

export default FormComponent;