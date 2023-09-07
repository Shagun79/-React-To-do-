import React from "react";

let ListItem = (props) => {
    

  return ( <div className="container"> 
    <i className="fa fa-trash-o  delete" onClick={() => props.delete(props.id) } ></i>
  <li>{props.text}</li>
  
  
  </div>
  )
};
export default ListItem;
