import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../context/ThemeContext'
import logo from '../assets/react.svg'
import { FaBars, FaTimes } from 'react-icons/fa'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
function Nav() {
  const navigate = useNavigate()
  const { user, handleLogout } = useContext(AuthContext)
  const { theme, toggleTheme } = useContext(ThemeContext)
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const logout = () => {
    handleLogout()
    navigate("/login")
  }
  return (
    <div className='flex justify-between items-center p-4 bg-gray-200 dark:bg-gray-800 text-black dark:text-white relative'>
      <img src={logo} alt="logo" className='w-10 h-10' />
      <Link className='hidden md:block' to="/">Home</Link>
      {user && <Link className='hidden md:block' to="/product">Product</Link>}
      <Link className='hidden md:block' to="/hooks">Hooks</Link>

      <button onClick={toggleTheme}>{theme} Mode</button>
      {user ? <button onClick={logout}>Logout</button> : <button onClick={() => navigate("/login")}>Login</button>}

      {/* <button className='md:hidden' onClick={toggleMenu}><FaBars /></button> */}
      {isOpen ? <button className='md:hidden' onClick={toggleMenu}><FaTimes /></button> : <button className='md:hidden' onClick={toggleMenu}><FaBars /></button>}
      {isOpen && <div className='absolute top-0 right-0 w-[50vw] h-[30vh] bg-gray-200 dark:bg-gray-800 text-black dark:text-white flex flex-col justify-center items-center gap-5 z-10000 overflow-hidden '>
        <button className='absolute top-6 right-4' onClick={toggleMenu}><FaTimes /></button>
        <Link onClick={toggleMenu} to="/">Home</Link>
        {user && <Link onClick={toggleMenu} to="/product">Product</Link>}
        <Link onClick={toggleMenu} to="/hooks">Hooks</Link>
        {user ? <button onClick={logout}>Logout</button> : <button onClick={() => navigate("/login")}>Login</button>}
      </div>}
    </div>
  )
}

export default Nav