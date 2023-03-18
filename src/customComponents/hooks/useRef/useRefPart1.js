import React, { useEffect, useRef } from 'react'

function UseRefPart1() {
    const useReference = useRef(null);
    useEffect(()=>{
        useReference.current.focus();
    },[]);
  return (
    <div>
        <input type="text" ref={useReference} />
    </div>
  )
}

export default UseRefPart1