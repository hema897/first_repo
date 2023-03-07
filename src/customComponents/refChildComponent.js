import React, { Component } from 'react'

class refChildComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
      }
      this.inputRef=React.createRef();
      console.log(props,"props")
    }
    inputFocus(){
        this.inputRef.current.focus();
    }
    greet(){
        alert("hell Hema")
    }
  render() {
    return (
      <div>refChildComponent
        <input type="text" ref={this.inputRef}/>
      </div>
    )
  }
}

export default refChildComponent
