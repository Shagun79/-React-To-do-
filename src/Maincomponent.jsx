import React  from "react";



function Maincomponent(props){

  function click(){
      alert(props.name, props.father)
  }

    return(<>
        <h1>
            Name: {props.name}
           
        </h1>
        <h1>
               Father : {props.father}
        </h1>

          <button onClick={click}> onclick</button>
        </>                               
    
    
    )
}


export default Maincomponent;