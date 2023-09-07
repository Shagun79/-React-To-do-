import React, { useState } from "react";
import './selfTODO.css'
import  List from './selfLiIST'

let TODOlist =()=>{
    const[itemValue, setitemValue]=useState("");
    const[listItems, setlistItems]= useState([]);
    let values=(e)=>{
        console.log(e.target.value)
       
        setitemValue(e.target.value);
       

    }
    let add=()=>{
        setitemValue("");


        setlistItems(
            
           [...listItems, itemValue]
          );
          console.log(setlistItems);
    };
    let deleteItem=(id)=>{
        setlistItems((array) => {
            return array.filter((cElement, index) => {
              return index !== id;
            });
          });

    }



  return  ( 
    <>
    <div className="container">

        <h1>To Do List</h1>
         <hr/>

         <div>
            <input type="text" placeholder="Enter Item" value={itemValue} onChange={values} /> 
            <button onClick={add}> Add</button>
         </div>
          <div className="listItems">
            <ul>
               {
                listItems.map((arrayValue, index)=>{
                    return (<List text={arrayValue} id={index} key={index} delete={deleteItem}/>
                    )


                })
               }
            
            </ul>


          </div>


    </div>
    
    
    </>



  )
}
export default TODOlist;