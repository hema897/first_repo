import axios from 'axios'
import React, { useEffect, useState } from 'react'

function FetchData() {
    const [data,setData] = useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>{
            setData(res.data)
            console.log(res,data)
        })
        .catch(err=>{console.error(err)})
    },[])
  return (
    <div>
        <ul>
        {data.map((obj)=><li key={obj.id}>{obj.title}</li>)}
        </ul>
    </div>
  )
}

export default FetchData