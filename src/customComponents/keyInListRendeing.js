import React, { Component } from 'react'

class keyInListRendeing extends Component {
    constructor(props){
        super(props);
        this.state={list:["hema","botla","gayathri","hema"]}
    }
  render() {
    return (
      <div>
        {/* <h3>Enter name</h3>
        <input type="text" />
        <button type='text'onClick={this.save}>save</button> */}
        {this.state.list.map((name,index)=><h4 key={name+index}>{name}</h4>)}
      </div>
    )
  }
}

export default keyInListRendeing