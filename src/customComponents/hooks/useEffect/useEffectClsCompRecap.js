import React, { Component } from 'react'

// var title
class useEffectClsCompRecap extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
      
    }
    componentDidMount(){
        document.title=`counter value ${this.state.count}`
        console.log("mount",document)
    }
    componentDidUpdate(){
        document.title=`counter value ${this.state.count}`
        console.log("updated",document)
    }
    incrementCount = () =>{
        this.setState(prevState =>({count:prevState.count+1}),()=>{console.log(this.state)});
    }
  render() {
    return (
      <div>
        <h2>{document.title}</h2>
        <button onClick={this.incrementCount}>click</button>
      </div>
    )
  }
}

export default useEffectClsCompRecap