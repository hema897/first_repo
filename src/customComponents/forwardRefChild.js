import React from 'react'

const forwardRefChild = React.forwardRef((props,ref) => {
    return (
      <div>forwardRefChild
        <input type="text" ref={ref} />
      </div>
    )
  })

export default  forwardRefChild
