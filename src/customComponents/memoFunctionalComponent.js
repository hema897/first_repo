import React from 'react'

function memoFunctionalComponent({name}) {
    console.log("memo component");
  return (
    <div>memoFunctionalComponent
        <h3>{name}</h3>
    </div>
  )
}
export default React.memo(memoFunctionalComponent)