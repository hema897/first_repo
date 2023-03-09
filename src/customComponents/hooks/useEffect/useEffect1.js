import React, { useEffect, useState } from 'react'

function useEffect1() {
    const [count,setCount] = useState(0)
    useEffect(()=>{
        document.title=`counter value ${count}`
    })
    const incrementCount=()=>{
        setCount(prevSate=>prevSate+1)
        console.log(count)
    }
  return (
    <div>
        <h2>{document.title}</h2>
        <button onClick={incrementCount}>click</button>
    </div>
  )
}

export default useEffect1