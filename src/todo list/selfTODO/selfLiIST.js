import React from "react";

let List=(props)=>{


    return( <>
    <div className="content">
    <i className="fa fa-trash-o  delete" onClick={() => props.delete(props.id) } ></i>
    <li> {props.text} </li>

    </div>

       
    
    </>
      

    )
}
export default List;