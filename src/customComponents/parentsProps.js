import React, {Component} from "react";
import ChildPropCommunication from "./childprops";

class ParentPropsCommunication extends Component{
    constructor(props){
        super(props);
        this.state={who : "Parent"};
        this.greet=this.greet.bind(this);
    }

    greet(child){
        alert(`Hello ${this.state.who} from ${child}`)
    }

    render(){
        return(<><ChildPropCommunication greet={this.greet}/></>)
    }
}

export default ParentPropsCommunication;