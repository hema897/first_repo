
import React,{Component} from "react";

class Welcome extends Component{
    render(){
        return <h1>This is class Component and we have data from props {this.props.data}</h1>;
    }
}

export default Welcome;