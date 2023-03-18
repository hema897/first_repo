import React, { useMemo, useState } from 'react'

function UseMemo() {
    const [counter1,setCounter1] = useState(0);
    const [counter2,setCounter2] = useState(0);
    const handler1 = () =>{
        console.log("counter1",counter1);
        setCounter1(prevState => prevState+1);
    }
    const handler2 = () =>{
        console.log("counter2",counter2);
        setCounter2(prevState => prevState+1);
    }
    const even = useMemo(
        () =>{
            console.log("loop")
            let i=0
            while(i<2000000000) i+=1
            if(counter1%2)
                return false
            return true
        },[counter1]
    )
  return (
    <div>
        <button type='button' onClick={handler1}>{counter1}</button>
        <span>{!!even ? "even" : "odd"}</span>
        <button type='button' onClick={handler2}>{counter2}</button>
    </div>
  )
}

export default UseMemo