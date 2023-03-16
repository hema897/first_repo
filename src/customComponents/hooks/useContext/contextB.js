import React, { useContext } from 'react'
import ContextC from './contextC'
import { UserContext,lastContext } from '../../../App'

function ContextB() {
    const firstContext = useContext(UserContext);
    const secondContext = useContext(lastContext)
  return (
    <div>
        <ContextC />
        {`using hooks userContext ${firstContext}-${secondContext}`}
    </div>
  )
}

export default ContextB