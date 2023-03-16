import React, { useReducer } from 'react'

const initalState = {counter1:0,counter2:10};
const reducer = (state,action) =>{
    switch(action.type){
        case "increment":
            return {...state,counter1:state.counter1+action.value}
        case "decrement":
            return {...state,counter1:state.counter1-action.value}
            case "Secountincrement":
                return {...state,counter2:state.counter2+action.value}
            case "Seconddecrement":
                return {...state,counter2:state.counter2-action.value}
        case "reset":
            return initalState
    }
}
function CountObjectUseReducer() {
    console.log(initalState)
       const [count,dispatch]=useReducer(reducer,initalState)
  return (
    <div>
        <h3>{`first counter ${count.counter1}`}</h3>
        <button type='button' onClick={()=>dispatch({type:'increment',value:1})}>Firstincrement</button>
        <button type='button' onClick={()=>dispatch({type:'decrement',value:1})} >Firstdecrement</button>
        <button type='button' onClick={()=>dispatch({type:'increment',value:5})}>FirstincrementBy5</button>
        <button type='button' onClick={()=>dispatch({type:'decrement',value:5})} >FitstdecrementBy5</button>
        <button type='button' onClick={()=>dispatch({type:"reset"})} >reset</button>
        <h3>{`second counter ${count.counter2}`}</h3>
        <button type='button' onClick={()=>dispatch({type:'Secountincrement',value:1})}>Secountincrement</button>
        <button type='button' onClick={()=>dispatch({type:'Seconddecrement',value:1})} >Seconddecrement</button>
    </div>
  )
}

export default CountObjectUseReducer