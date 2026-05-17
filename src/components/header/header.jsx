import React from 'react'
import { Link } from 'react-router-dom'
import './Heaer.css'

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Dizenfektsiya</div>

      <nav className="nav">
        <Link to="/home">Service</Link>
        <Link to="/about"></Link>
        <Link to="/contact">bog'lanish</Link>
        <Link></Link>
      </nav>
      <button className='btn-sign'>Ro'yxatdan O'tish</button>
    </header>
  )
}

export default Header