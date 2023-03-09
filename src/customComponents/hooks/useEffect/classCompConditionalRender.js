import React, { Component } from 'react'

// var title
class classCompConditionalRender extends Component {
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
    componentDidUpdate(prevProps,prevState){
        if(prevState.count!=this.state.count)       //conditional render
            {document.title=`counter value ${this.state.count}`
            console.log("updated",document)}
    }
    incrementCount = () =>{
        this.setState(prevState =>({count:prevState.count+1}),()=>{console.log(this.state)});
    }
    changeHandler = (e) =>{
        this.setState({name:e.target.value})
    }
  render() {
    return (
      <div>
        <h2>{document.title}</h2>
        <input type="text" onChange={this.changeHandler} value={this.state.name}/>
        <button onClick={this.incrementCount}>Clsclick</button>
      </div>
    )
  }
}

export default classCompConditionalRender