import React,{Component} from "react";

class SetStateUsage extends Component{
    constructor(){
        super();
        this.state={counter:0};
    }
    increment(){
        // this.setState({counter:this.state.counter+1},()=>{console.log("call back function",this.state.counter)})
        this.setState(prevState =>({counter:prevState.counter+1}),()=>{console.log("call back function",this.state.counter)})
        console.log(this.state.counter)
    }
    incrementByFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    render(){
        return(<div>
            count - {this.state.counter}
            <button onClick={()=>this.incrementByFive()}>Increment</button>
        </div>)
    }
}

export default SetStateUsage;