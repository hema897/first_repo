import React from 'react'

function throwErrorToTestErrBoundary({heroName}) {
    if(heroName==="joker")
     throw new Error("hero name is joker");
  return (
    <div>throwErrorToTestErrBoundary</div>
  )
}

export default throwErrorToTestErrBoundary