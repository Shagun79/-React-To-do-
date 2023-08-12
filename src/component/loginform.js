import React, { useEffect, useState } from "react";
import "./loginform.css";

const Loginform = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");


  console.log(name);
  console.log(password);

  //  name= "sajal";
  //  password ="shagun";
  // setName("sajal");
  // setPassword("shagun");

    
  //   console.log(name);
  // console.log(password);


 


  






  

   let nameValue= (e) => {
  
    setName(e.target.value);}

  //   let passValue= (event) => {
  //       console.log(event.target.value);
  //       setPassword(event.target.value);
  // let onSubmit= ()=>{

  // }
 
   
  return (
    <>
      <div>
        <h1>Login Form</h1>
        <input placeholder="Name"
         type="text"
         value={name}
        //  onChange={(e) => setName(e.target.value)}
        onChange={nameValue}
         />                <br />
       
       
        <input
          placeholder="Placeholder"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
     
                                        <br />
        <button>CLICK</button>
      </div>
    </>
  );
};

export default Loginform;
