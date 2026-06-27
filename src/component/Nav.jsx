import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className='flex justify-between items-center p-4 bg-gray-200'>
    <Link to="/">Home</Link>
    <Link to="/product">Product</Link>
    </div>
  )
}

export default Nav