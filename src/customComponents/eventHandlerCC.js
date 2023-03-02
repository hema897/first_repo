import React, { Component } from "react";

class clickHandler extends Component{
    buttonClick(){
        console.log("CC click")
    }
    render(){
        return(<div><button onClick={this.buttonClick}>CC click</button></div>)
    }
}

export default clickHandler;