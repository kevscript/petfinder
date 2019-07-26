import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <Link to="/">Change Type</Link>
      <Link to="/form">Edit Search</Link>
      <Link to="/list">Animals List</Link>
    </div>
  )
}

export default Header