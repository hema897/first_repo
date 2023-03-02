import React, { Component } from "react";

class DeStruct extends Component{
    constructor(props){
        super();
        const{name,age} = props;
        console.log(name,age);
    }
    render(){
        const{name,age} = this.props;
        return(<>
        Hey
        <p>Hello  {name}</p>
        </>)
    }
}

export default DeStruct;