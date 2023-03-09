import axios from 'axios'
import React, { Component } from 'react'

class getHttp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {}
    }

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>{
            this.setState({response:response},()=>{console.log(this.state.response,"response")})
        })
        .catch(error =>{
            console.error(error)
        })
    }
  render() {
    const response = this.state?.response?.data
    if(!!response){
        console.log(response,"out",response.length)
        return (
            <div>getHttp
              {!!response.length? response.map(obj =><h4 key={obj.id}>{obj.title}</h4>) : null}
            </div>
          )
    }
  }
}

export default getHttp