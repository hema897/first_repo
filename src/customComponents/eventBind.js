import React, { Component } from "react";

class EventBind extends Component{
    constructor(props){
        super(props);
        this.state={message:"Hey Hii"}
        // this.changeMsg=this.changeMsg.bind(this); three
    }
    // changeMsg(){
    //     this.setState({message:"Good Bye!"})     //1,2,3
    // }

    changeMsg=()=>{
        this.setState({message:"Good Bye!"}) //4
    }
    render(){
        return(
        // <><h1>{this.state.message}</h1><button onClick={this.changeMsg.bind(this)}>Click</button></> //one
        // <><h1>{this.state.message}</h1><button onClick={()=>this.changeMsg()}>Click</button></> //two it is used to pass parameters
        // <><h1>{this.state.message}</h1><button onClick={this.changeMsg}>Click</button></> //three
        <><h1>{this.state.message}</h1><button onClick={this.changeMsg}>Click</button></> //4

        // recommend 3 and 4 and if we pass parameters then 2

        )
    }
}

export default EventBind;