import React, { useState } from 'react'

function FunComCounter() {
    const [count,setCount] = useState(0)
  return (
    <div>
        <button type="button" onClick={()=>setCount(count+1)}>click  {count}</button>
    </div>
  )
}

export default FunComCounter