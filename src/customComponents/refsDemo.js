import React, { Component } from 'react'

class refsDemo extends Component {
    constructor(props) {
      super(props)
      this.state = {
      }
      this.inputRef = React.createRef();
      this.callBackRef = null;
      this.setCallBackRef = element =>{this.callBackRef= element}
    }
    componentDidMount(){
        console.log(this.inputRef,this.callBackRef,this.setCallBackRef)
        this.inputRef.current.focus();
        // if(!!this.callBackRef)
        // this.callBackRef.focus();
    }
    onClick = () =>{
        console.log(this.inputRef.current.value);
        console.log(this.callBackRef.value)
    }
  render() {
    return (
      <div>refsDemo
        <input type="text" ref={this.inputRef} />
        <input type="text" ref = {this.setCallBackRef} />
        <button onClick={this.onClick}>click me</button>
    </div>
    )
  }
}

export default refsDemo
