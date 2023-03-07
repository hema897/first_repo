import React from 'react'
import {ConsumerContext} from "./context"

function componentD(props) {
  return (
    <ConsumerContext>
        {obj=>{
            return(
                <div>outside value
                    <div>Hello {obj.name}</div>
                </div>
            )
        }}
    </ConsumerContext>
    
  )
}

export default componentD