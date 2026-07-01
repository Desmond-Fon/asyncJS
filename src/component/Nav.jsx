import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../context/ThemeContext'

function Nav() {
  const {theme, toggleTheme} = useContext(ThemeContext)
  return (
    <div className='flex justify-between items-center p-4 bg-gray-200 dark:bg-gray-800 text-black dark:text-white'>
    <Link to="/">Home</Link>
    <Link to="/product">Product</Link>
    <Link to="/hooks">Hooks</Link>

    <button onClick={toggleTheme}>{theme} Mode</button>
    </div>
  )
}

export default Nav