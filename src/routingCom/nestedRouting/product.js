import React from 'react';
import { NavLink,Outlet } from 'react-router-dom';

export const Product = () => {
  return (
    <div>
        <h2>product</h2>
        <NavLink className="productTabs" to="feature">Frature</NavLink>
        <NavLink className="productTabs" to="new">New</NavLink>
        <Outlet/>
    </div>
  )
}
