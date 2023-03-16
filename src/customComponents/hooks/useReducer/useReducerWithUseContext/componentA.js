import React,{useContext} from 'react';

import { useReducerContext } from '../../../../App';

function ComponentA(props) {
    const counterContext = useContext(useReducerContext)
    console.log(counterContext);
  return (
    
    <div>
        {`componentA ${counterContext.count}`}
        <button type='button' onClick={()=>counterContext.dispatch('increment')}>increment</button>
        <button type='button' onClick={()=>counterContext.dispatch('decrement')} >decrement</button>
        <button type='button' onClick={()=>counterContext.dispatch('reset')} >reset</button>
    </div>
  )
}

export default ComponentA