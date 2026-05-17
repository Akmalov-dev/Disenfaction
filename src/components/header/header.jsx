import React from 'react'
import { Link } from 'react-router-dom'
import './Heaer.css'

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Dizenfektsiya</div>

      <nav className="nav">
        <Link to="/home">Service</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/faq">Faq</Link>
      </nav>
      <button className='btn-sign'>Ro'yxatdan O'tish</button>
    </header>
  )
}

export default Header