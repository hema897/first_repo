import React from "react";

const clickHandler = () =>{
    const buttonClick = () =>{
        console.log("clicked")
    }
    return(<div><button onClick={buttonClick}>FC click</button></div>)
}

export default clickHandler;