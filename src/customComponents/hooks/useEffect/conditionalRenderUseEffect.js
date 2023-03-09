import React, { useEffect, useState } from 'react'

function ConditionalRenderUseEffect() {
    const [count,setCount] = useState(0)
    const [name,setName] = useState("")
    useEffect(()=>{
        document.title=`counter value ${count}`
        console.log("uppdated")
    },[count,name])     //-->update data when following array Element value changes
    const incrementCount=()=>{
        setCount(prevSate=>prevSate+1)
        console.log(count)
    }
  return (
    <div>
        <h2>{document.title}</h2>
        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}  />
        <button onClick={incrementCount}>click</button>
    </div>
  )
}

export default ConditionalRenderUseEffect