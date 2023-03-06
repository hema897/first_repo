import React, { Component } from 'react'

class lifeCycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         msg:"hii"
      }
    }
    static getDerivedStateFromProps(props,state){
        console.log("getDerivedStateFromProps A")
        return null
    }
    shouldComponentUpdate(props,state){
        console.log("shouldComponentUpdate A")
        return true
    }
    getSnapshotBeforeUpdate(props,state){
        console.log("getSnapshotBeforeUpdate A")
        return null
    }
    componentDidUpdate(props,state,snapshot){
        console.log("componentDidUpdate A")
    }
    chageState = ()=>{
        console.log("click")
        this.setState({msg:"Hello"})
    }
  render() {
    let {msg}=this.state
    return (
      <div>{msg}
        <button onClick={this.chageState}>change</button>
      </div>
      
    )
  }
}

export default lifeCycleB
