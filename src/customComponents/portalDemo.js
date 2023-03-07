import React from 'react'
import ReactDOM from 'react-dom'

function portalDemo() {
  return ReactDOM.createPortal(
    <div>portalDemo</div>,document.getElementById("portal_demo")
  )
}

export default portalDemo
