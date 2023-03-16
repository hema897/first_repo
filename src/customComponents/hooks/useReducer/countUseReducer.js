import React, { useReducer } from 'react'

const initalState = 0
const reducer = (currentState,action)=>{
    console.log(currentState,"currentState")
    switch(action){
        case "increment":
            return currentState+1
        case "decrement":
            return currentState-1
        case "reset":
            return initalState
    }
}
function CountUseReducer() {
    
    const [count,dispatch]=useReducer(reducer,initalState)
    console.log(dispatch)
  return (
    <div>
        <button type='button' onClick={()=>dispatch('increment')}>increment</button>
        <button type='button' onClick={()=>dispatch('decrement')} >decrement</button>
        <button type='button' onClick={()=>dispatch('reset')} >reset</button>
        <h2>{count}</h2>
    </div>
  )
}

export default CountUseReducer