import React, { Component } from 'react'

class formhanler extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userName:"",
         branch:"cse"
      }
    }
    inputHaldler = event =>{
        console.log(event)
        this.setState({userName:event.target.value})
    }
    selecttHaldler = event =>{
        console.log(event)
        this.setState({branch:event.target.value})
    }
    onFormSubmit = event =>{
        console.log(event)
        alert(`${this.state.userName} ${this.state.branch}`)
        event.preventDefault()
    }
  render() {
    const {userName,branch}=this.state
    return (
      <form onSubmit={this.onFormSubmit}>
        <label>username</label>
        <input type="text" onChange = {this.inputHaldler} value={userName} />
        <label>Select branch</label>
        <select value= {branch} onChange = {this.selecttHaldler}>
            <option value="CSE">CSE</option>
            <option value="ECE">ECE</option>
            <option value="IT">IT</option>
            <option value="MECH">MECH</option>
        </select>
        <button type="submit">Save</button>
      </form>
    )
  }
}

export default formhanler
