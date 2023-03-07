import React, { Component } from 'react'
import ForwardRefChild from "./forwardRefChild"

class forwordRefParent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
      }
      this.forwardRef = React.createRef()
    }
    clickHandler = ()=>{
        console.log(this.forwardRef);
        this.forwardRef.current.focus();
    }
  render() {
    return (
      <div>forwordRefParent
        <ForwardRefChild ref={this.forwardRef} />
        <button onClick={this.clickHandler}>click</button>
      </div>
    )
  }
}

export default forwordRefParent
