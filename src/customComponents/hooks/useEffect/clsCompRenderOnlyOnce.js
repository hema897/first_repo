import React, { Component } from 'react'

class clsCompRenderOnlyOnce extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         x:0,
         y:0
      }
    }
    logMouseMove =(e) =>{
        this.setState({x:e.clientX,y:e.clientY})
        console.log("clsmoved")

    }
    componentDidMount(){
        window.addEventListener("mousemove",this.logMouseMove)
    }
    componentWillUnmount(){
        console.log("unmount")
        window.removeEventListener("mousemove",this.logMouseMove)
    }
    render() {
        const {x,y}=this.state
        return (
        <div>
            {`x position ${x}-- y position ${y}`}
        </div>
        )
    }
}

export default clsCompRenderOnlyOnce