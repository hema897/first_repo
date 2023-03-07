import React, { Component } from "react";

const getCounter = WrappedComponent =>{
    class GetCounter extends Component{
        constructor(props) {
            super(props)
          
            this.state = {
               count:0
            }
          }
          incrementCount = () =>{
              this.setState(prevState=>({count:prevState.count+1}))
          }
          render(){
            return (<WrappedComponent count={this.state.count} incrementCount = {this.incrementCount}/>)
          }
    }
    return GetCounter
}
export default getCounter