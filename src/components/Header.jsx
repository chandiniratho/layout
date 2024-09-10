
import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css' // Import custom CSS file

function Header() {
  return (
    <div className='sidenav'>
      <div className='navbar-brand'>
        Flora & Khloe 
      </div>
      <ul className='navbar-nav'>
        <li className='nav-item'>
          <Link className='nav-link' to='/about'>About Us</Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/dashboard'>Products</Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/services'>Services</Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/contact'>Contact</Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/'>Logout</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header