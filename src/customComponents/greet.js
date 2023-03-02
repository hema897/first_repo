import React from "react";

// export const Greet = () => <h1>Hello Hema one</h1>

const Greet = props =>{
    console.log(props)
    return(<><h1>Hello {props.name}</h1>
    {props.children}</>
        
    )
    
}


export default Greet