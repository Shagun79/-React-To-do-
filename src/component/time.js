import React  from "react"; 
import { useState } from "react";
import './time.css'
let UpdateTime =() => {
    let NewTime = new Date().toLocaleTimeString();
     const [cTime, setTime]= useState(NewTime);

       let TimeChange =()=> {
        NewTime = new Date().toLocaleTimeString();
        setTime(NewTime);

       }



     
    return( <div>
    

    <h1>
        {cTime}
    </h1>
     <button onClick={TimeChange}> Submit</button>




    </div>

    );
}
export default UpdateTime;