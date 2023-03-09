import React, { Component } from 'react'

class ClsComCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         counter:0
      }
    }
    clickHandler=()=>{
      this.setState(prevState =>({counter:prevState.counter+1}))
    }
  render() {
    return (
      <div>
        <button type="button" onClick={this.clickHandler}>click {this.state.counter}</button>
      </div>
    )
  }
}

export default ClsComCounter