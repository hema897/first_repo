import React, { Component } from 'react'

import PureComponet from "./pureComponet"
import RegularComponent from "./regularComponent"

class parentOfPureRegularCom extends Component {
    componentDidMount(){
        console.log("componentDidMount")
        setInterval(()=>{this.setState({name:"hema Botla"})},10000)
    }
  render() {
    console.log("parentOfPureRegularCom")
    return (
      <div>parentOfPureRegularCom
        <PureComponet />
        <RegularComponent />
      </div>
    )
  }
}
export default parentOfPureRegularCom