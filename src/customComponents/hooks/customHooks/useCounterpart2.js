import React, { useState } from 'react'

function useCounterpart2(initialValue=0,value) {
  const [count,setCount] = useState(initialValue);
  const incerment =()=>{
    setCount(prevState=>prevState+value)
  }
  const decrement =()=>{
    setCount(prevState=>prevState-value)
  }
  const reset =()=>{
    setCount(initialValue)
  }
  return [count,incerment,decrement,reset];
}

export default useCounterpart2