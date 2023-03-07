import React, { Component } from 'react'

import PureComponet from "./pureComponet"
import RegularComponent from "./regularComponent"
import MemoFunctionalComponent from "./memoFunctionalComponent"

class parentOfPureRegularCom extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name : "hema"
    }
  }
    componentDidMount(){
        console.log("componentDidMount")
        setInterval(()=>{this.setState({name:"hema Botla"})},10000)
    }
  render() {
    console.log("parentOfPureRegularCom")
    return (
      <div>parentOfPureRegularCom
        {/* <PureComponet />
        <RegularComponent /> */}
        <MemoFunctionalComponent name={this.state.name} />
      </div>
    )
  }
}
export default parentOfPureRegularCom