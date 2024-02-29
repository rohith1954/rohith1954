import React,{useState} from "react";
import FormComponent from "./FormComponent";
import DisplayComponent from "./DisplayComponent";

function ParentComponent() {

    const [dataToDisplay, setDatToDisplay] = useState('');

    const handlesubmit = (data) => {
        setDatToDisplay(data);

    }

    return(
        <>
           <FormComponent onsubmit={handlesubmit}/>
           <DisplayComponent displayData ={dataToDisplay}/>
        </>
    )

    
}

export default ParentComponent;