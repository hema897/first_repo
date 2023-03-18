import React, { useEffect, useRef, useState } from 'react'

// var interval="";
function UseRefPart2() {
    
    const [timer,setTimer] = useState(0);
    const interval = useRef()
    useEffect(()=>{
        
        interval.current=setInterval(()=>{
            setTimer(prevState=>prevState+1)
            return () =>{
                clearInterval(interval.current);
            }
        }
        )
    },[])
  return (
    <div>
        <span>{`Timer - ${timer}`}</span>
        <button onClick={()=>clearInterval(interval.current)}>clearInterval</button>
    </div>
  )
}

export default UseRefPart2