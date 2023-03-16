import React from 'react'

function TitleUseCallBack() {
    console.log("TitleUseCallBack")
  return (
    <div>TitleUseCallBack</div>
  )
}

export default React.memo(TitleUseCallBack)