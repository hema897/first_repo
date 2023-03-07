import React, { Component } from 'react'
import ComponentD from "./componentD"
import context from './context'
import Context from './context'

class componentC extends Component {
    // static contextType = context          it only supports public class 
  render() {
    return (
        <div>
            <h2>from c {this.context.name}</h2>
        <ComponentD />
    </div>
    )
  }
}
componentC.contextType = Context
export default componentC

