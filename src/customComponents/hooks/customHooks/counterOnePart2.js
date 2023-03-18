import React from 'react'
import useCounterpart2 from './useCounterpart2'

function CounterOnePart2() {
    const [count,incerment,decrement,reset] = useCounterpart2(0,1)
  return (
    <div>
        {`count - ${count}`}
        <button type='button' onClick={incerment}>increment</button>
        <button type='button' onClick={decrement}>decrement</button>
        <button type='button' onClick={reset}>reset</button>
    </div>
  )
}

export default CounterOnePart2