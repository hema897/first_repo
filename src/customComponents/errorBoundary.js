import React, { Component } from 'react'

class errorBoundary extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         hasError:false
      }
    }
    static getDerivedStateFromError(error){
        console.log("error",error)
        return {hasError:true}
    }
  render() {
    console.log(this.props,this.state)
    if(this.state.hasError){
        return (
            <div>something went wrong</div>
            )
    }
        
    else{
        return this.props.childreen
    }
        
  }
}

export default errorBoundary