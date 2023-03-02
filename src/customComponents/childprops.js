import React from "react";

function ChildPropCommunication(props){
    return(<><button onClick={()=>props.greet("child")}>click me</button></>)
}

export default ChildPropCommunication;