import axios from 'axios'
import React, { useEffect, useState } from 'react'

function FetchDataUsingButtonClick() {
    const [id,setId] = useState(1)
    const [response,setRes]=useState({})
    const [buttonId,setButId] = useState(id)
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${buttonId}`).then(res=>{
            
            setRes(res.data)
            console.log(res,"res")
        }).catch(e=>{console.log(e)})
    },[buttonId])


  return (
    <div>
        <input type="text" name="id" value={id} onChange={(e)=>{setId(e.target.value)}}/>
        <button type='button' onClick={()=>{setButId(id)}}>click</button>
        {response.id}
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

export default FetchDataUsingButtonClick