import React, { useState } from 'react'
import UseEffectRenderOnce from './useEffectRenderOnce'
import ClsCompRenderOnlyOnce from './clsCompRenderOnlyOnce'

function UseEffectCleanUp() {
    const [display,setDisplay] =useState(true)
  return (
    <div>
        <button type='button' onClick={()=>{setDisplay(!display)}}>toggle</button>
        {!!display && <UseEffectRenderOnce />}
        {!!display && <ClsCompRenderOnlyOnce/>}
    </div>
  )
}

export default UseEffectCleanUp