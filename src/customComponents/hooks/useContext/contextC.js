import React from 'react'
import {UserContext,lastContext} from "../../../App"

function ContextC() {
  return (
    <div>
        <UserContext.Consumer>
            {user=>{
                return(
                    <lastContext.Consumer>
                        {lastName=>{
                            return(<h3>without using hooks {user} {lastName}</h3>)
                        }}
                        
                    </lastContext.Consumer>
                )

            }}
        </UserContext.Consumer>
    </div>
  )
}

export default ContextC