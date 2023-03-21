import React from 'react'
import {Link,Outlet} from 'react-router-dom';

import "../../scss/styling.scss"

export const Users = () => {
  var userList = [1,2,3,4]
  return (
    <div>
      <Outlet/>
      {userList.map((ele)=><Link to={""+ele} className='productTabs' key={ele}>{`user${ele}`}</Link>)}
    </div>
  )
}
