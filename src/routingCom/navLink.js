import React from 'react'
import { NavLink } from "react-router-dom";

import "../scss/styling.scss"


export function NavLinkDemo() {
    const navLinkStyles = ({isActive}) =>{
        console.log(isActive,"event")
        return {
            fontWeight : isActive ? "bold" : "normal",
            textDecoration : isActive ?"none" : "underline"
        }
    }
  return (
    <nav>
        <NavLink style={navLinkStyles} className="tab" to="/">Home</NavLink>
        <NavLink style={navLinkStyles} className="tab" to="/about">About</NavLink>
        <NavLink style={navLinkStyles} className="tab" to="/product">Product</NavLink>
        <NavLink style={navLinkStyles} className="tab" to="/users">Users</NavLink>
    </nav>
  )
}
