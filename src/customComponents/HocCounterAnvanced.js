import React, { Component } from "react";

const advancedCounter = (WrappedComponent,incremnetVal) =>{
  class AdvancedCounter extends Component{
    constructor(props) {
      super(props)
      this.state = {
          count:0
      }
      }
      incrementCount = () =>{
          this.setState(prevState=>({count:prevState.count+incremnetVal}))
      }
      render(){
        return <WrappedComponent count={this.state.count} incrementCount={this.incrementCount} {...this.props} />
      }
    }
    return AdvancedCounter
}

export default advancedCounter