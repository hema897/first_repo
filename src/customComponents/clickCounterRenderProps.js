import React, { Component } from 'react'
import GetCounter from './HOCCounter'

class clickCounterRenderProps extends Component {
    
  render() {
    const {count,incrementCount}= this.props
    console.log(this.props,count,incrementCount)
    return (
      <div>
        <button onClick={incrementCount}>clicked {count} times</button>
      </div>
    )
  }
}

export default clickCounterRenderProps
