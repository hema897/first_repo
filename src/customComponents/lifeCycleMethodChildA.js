import React, { Component } from 'react'

class lifeCycleMethodChildA extends Component {
    constructor(props) {
        super(props)
        this.state ={}
        console.log("constructor B")
      }
      static getDerivedStateFromProps(props,state){
          console.log("getDerivedStateFromProps B")
          return null
      }
      componentDidMount(){
          console.log("componentDidMount B")
      }
    render() {
      console.log("render B")
      return (
        <div>lifeCycleMethodChildA</div>
      )
    }
  
}

export default lifeCycleMethodChildA
