import React, { Component } from 'react'
import RefChildComponent from "./refChildComponent"

export default class refParentComponent extends Component {
    constructor(props) {
      super(props)
      this.state = {
    
      }
      this.parentRef=React.createRef()
      console.log(this.parentRef,"cons")
    }
    focusChild = () =>{
        console.log(this.parentRef);
        this.parentRef.current.inputFocus();
        this.parentRef.current.greet();
    }

  render() {
    return (
      <div>refParentComponent
        <RefChildComponent ref={this.parentRef} />
        <button onClick={this.focusChild}>childFocus</button>
      </div>
    )
  }
}
