import React, { useEffect, useState } from 'react';
import useCustomHookSetDocTitle from './useCustomHookSetDocTitle'

function SetDocumentTitleTwo() {
    const [count,setCount] = useState(0);
    useCustomHookSetDocTitle(count);
  return (
    <div>
        <button onClick={()=>setCount(prevState=>prevState+1)}>{`count - ${count}`}</button>
    </div>
  )
}

export default SetDocumentTitleTwo