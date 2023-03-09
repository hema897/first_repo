import axios from 'axios'
import React, { Component } from 'react'

class postHttp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {userId:1,title:"post",body:"body"}
    }
    changHandler=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    submitHandler=(e)=>{
        e.preventDefault()
        axios.post("https://jsonplaceholder.typicode.com/posts",this.state).then(
            res=>{console.log(res)})
            .catch(err=>{console.error(err)})
    }
  render() {
    const {userId,title,body} = this.state
    return (
      <div>
        <form onSubmit={this.submitHandler}>
            <div>
            <label>userId</label>
            <input onChange={this.changHandler} type="text" name="userId" value={userId}  />
            <label>title</label>
            <input onChange={this.changHandler} type="text" name="title" value={title}  />
            <label>body</label>
            <input onChange={this.changHandler} type="text" name="body" value={body}  />
            </div>
            <button type='submit'>save</button>
        </form>
      </div>
    )
  }
}

export default postHttp