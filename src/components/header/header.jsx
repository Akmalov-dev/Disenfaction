import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Heaer.css'

const Header = () => {
  const [open , setOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">Dizenfektsiya</div>

      <nav className="nav">
        <Link to="/home">Service</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/faq">Faq</Link>
      </nav>
      <button className='btn-sign' onClick={()=>setOpen(true)}>Kirish</button>

      {
      open && (
        <div className='onclick-div'>
          <div className='inputs'>
            <p>To'ldiring</p>
            <input type="text" placeholder='F.I.O' required/>
            <input type="email" placeholder='email' required/>
            <input type="password" placeholder='parol' required/>
            <input type="text" placeholder='tel raqam'/>
            <button className='btn-otish'>O'tish</button>
          </div>
          <div>
            <button className='X' onClick={()=>setOpen(false)}>X</button>
          </div>
        </div>
      )
      }

    </header>
  )
}

export default Header