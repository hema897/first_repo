import React from 'react'

function IncrementButton({text,handler}) {
    console.log(`${text} button block`);
  return (
    <div>
        <button type='button' onClick={handler}>{text}</button>
    </div>
  )
}

export default React.memo(IncrementButton)