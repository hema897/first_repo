import React, { Component } from 'react'

export class RefClassComponent extends Component {
  interval;
  constructor(props) {
    super(props)
  
    this.state = {
       timer:0
    }
  }
  componentDidMount(){
    console.log("didMount")
    this.interval = setInterval(()=>{
        this.setState(prevState =>({timer:prevState.timer+1}))
    })
}
componentWillUnmount(){
    clearInterval(this.interval);
}
  render() {
    return (
      <div>
        <span>{`timer - ${this.state.timer}`}</span>
        <button onClick={()=>clearInterval(this.interval)}>clearInterval</button>
      </div>
    )
  }
}

export default RefClassComponent