import React from 'react'

function DisplayData({text,value}) {
  console.log(`${text} display block`);
  return (
    <div>
      {`${text} - ${value}`}
    </div>
  )
}

export default React.memo(DisplayData)