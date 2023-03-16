import React, { useReducer,useEffect } from 'react'
import axios from 'axios'
import { type } from '@testing-library/user-event/dist/type'

const initalState = {loading:true,resData:{},error:''}
const reducer = (state,action)=>{
    console.log(state,action)
    switch(action.type){
        case "success":
            return{loading:false,resData:action.data,error:""}
        case "failure":
            return{loading:false,resData:{},error:"somothing went wrong"}
    }
}

function FetchingDataUseReducerPart2() {
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(res=>{
            dispatch({type:"success",data:res.data})
        })
        .catch(err=>{
            dispatch({type:"failure"})
        })
    },[])
    const [response,dispatch] = useReducer(reducer,initalState);
    console.log(response)
  return (
    <div>
        {!!response.loading? "loading" :(!!response.error?response.error :response.resData.title)}
    </div>
  )
}

export default FetchingDataUseReducerPart2