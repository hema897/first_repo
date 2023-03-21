import React from 'react'
import { Link } from 'react-router-dom'
export  function NavBar() {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
    </nav>
  )
}
