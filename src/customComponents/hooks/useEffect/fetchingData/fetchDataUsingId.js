import axios from 'axios'
import React, { useEffect, useState } from 'react'

var postId
function FetchDataUsingId() {
    const [response,setRes]=useState({})

    useEffect(()=>{
        console.log(response,"useEffect")
    },[response])
    
    const chageHandler =(e) =>{
        postId=e.target.value
        if(!!postId){
            axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(
            res=>{
                setRes(res.data)
            }
        )
        .catch(e=>console.error(e))
    }
        }

  return (
    <div>
        <input type="text" name="postId" onChange={chageHandler} />
        {postId}
        {response.id && <table>
            <tr>
                <th>userId</th>
                <th>id</th>
                <th>title</th>
                <th>body</th>
            </tr>
            <tr>
                <td>{response.userId}</td>
                <td>{response.id}</td>
                <td>{response.title}</td>
                <td>{response.body}</td>
            </tr>
        </table>}
    </div>
  )
}

export default FetchDataUsingId