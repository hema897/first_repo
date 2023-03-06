import React, { Component } from 'react'

import LifeCycleMethodChildA from "./lifeCycleMethodChildA"

class lifeCycleMethodA extends Component {
    constructor(props) {
      super(props)
      this.state ={}
      console.log("constructor A")
    }
    static getDerivedStateFromProps(props,state){
        console.log("getDerivedStateFromProps A")
        return null
    }
    componentDidMount(){
        console.log("componentDidMount A")
    }
  render() {
    console.log("render A")
    return (
      <div>lifeCycleMethodA
        <LifeCycleMethodChildA />
      </div>
    )
  }
}

export default lifeCycleMethodA
