import React, { useEffect, useState } from 'react'

function UseEffectRenderOnce() {
    const [x,setX]=useState(0)
    const [y,sety]=useState(0)
    const logMouse=(e)=>{
        setX(e.clientX)
        sety(e.clientY)
        console.log("moved")
        
    }
    useEffect(()=>{
        window.addEventListener("mousemove",logMouse)
        console.log("updated")
        return()=>{         //cleanupCode or destroy
            window.removeEventListener("mousemove",logMouse)
        }
    },[])
  return (
    <div>
        {`x position ${x}-- y position ${y}`}
    </div>
  )
}

export default UseEffectRenderOnce