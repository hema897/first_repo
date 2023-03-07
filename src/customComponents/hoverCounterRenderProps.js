import React, { Component } from 'react'
import GetCounter from "./HOCCounter"
import AdvancedCounter from "./HocCounterAnvanced"

class hoverCounterRenderProps extends Component {
    render() {
      const {count,incrementCount}= this.props
      return (
        <div>
          <h2 onMouseOver={incrementCount}>{this.props.name} hovered {count} times</h2>
        </div>
      )
    }
}

export default hoverCounterRenderProps