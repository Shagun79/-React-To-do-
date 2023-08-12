 import React, { useState }  from "react";
 import  './time.css'

  let DigitalClock =() =>{

    let Time = new Date().toLocaleTimeString();
    const[cTime, setTime]= useState(Time); 

    let UpdateTime = ()=>{
        let Time = new Date().toLocaleTimeString();

        setTime(Time);
    }
    setInterval(UpdateTime,1000);
    return(
         <h1>
            {cTime}
         </h1>

    );

  }

   export default DigitalClock;
