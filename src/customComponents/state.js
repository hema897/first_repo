import React,{Component} from "react";

class State extends Component{
    constructor(){
        super();
        this.state={message:"Welcome Hema",buttonTxt:"Subscribe"};
    }
    changeState(){
        this.setState({message:"Thankyou for subscribing",buttonTxt:"subscribed"})
    }
    render(){
        return(
            <>
            <h2>{this.state.message}</h2>
            <button onClick={() => this.changeState()}>{this.state.buttonTxt}</button>
            </>
        )
    }
}

export default State;