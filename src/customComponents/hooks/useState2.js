import React, { useState } from 'react'

function FunComCountAdvance() {
    const initalVal = 0
    const [count,setCount] =useState(initalVal)

    const changeCount = (changevalue)=>{
        console.log(initalVal)
        if(changevalue)
            setCount(prevState=>prevState+changevalue)
        else
            setCount(changevalue)
    }

  return (
    <div>
        {`counter ${count}`}
        <button type='button' onClick={()=>changeCount(1)}>incrementCount</button>
        <button type='button' onClick={()=>changeCount(-1)}>decrementCount</button>
        <button type='button' onClick={()=>changeCount(initalVal)}>resetCount</button>
    </div>
  )
}

export default FunComCountAdvance