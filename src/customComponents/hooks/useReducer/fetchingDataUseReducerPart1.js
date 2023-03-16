import React, { useEffect, useState } from 'react'
import axios from 'axios'

function FetchingDataUseReducer() {
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState('');
    const [postData,setData]=useState({});
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(res=>{
            setLoading(false);
            setData(res.data);
            setError('')
            console.log(res,loading,postData)
        })
        .catch(err=>{
            setLoading(false);
            setData({});
            setError('something went wrong')
        })
    },[])
    console.log(loading,postData,"==========")
  return (
    <div>
        {loading ? "loading" : postData.title}
        {error ?  error : null}
    </div>
  )
}

export default FetchingDataUseReducer