import React, { Component } from 'react'

export class UserEffectMistakseClsCom extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    thick = ()=>{
        this.setState(prevState =>({count:prevState.count+1}));
    }
    componentDidMount(){
        const interval= setInterval(this.thick,1000);
    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }
  render() {
    return (
      <div>
        {this.state.count}
      </div>
    )
  }
}

export default UserEffectMistakseClsCom