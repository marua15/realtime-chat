import React, { useEffect, useState } from 'react'
import './Navbar.scss'

const Navbar = () => {


  const [active,setActive] = useState(false)
  const isActive = (()=>{
    window.scrollY >0 ? setActive(true) :setActive(false)
  })
  useEffect(()=>{
    window.addEventListener('scroll',isActive)
    return () => {
      window.removeEventListener('scroll', isActive )
    }
  },[]);
  return (
    <div className={active ?" navbar active" : "navbar"} >
      <div className="container">
        <div className="logo">
          <div className="text">
             <span>ChatX</span>
          </div>
        </div>

        <div className="links">
            <span>Home</span>
            <span>About</span>
            <span>Pricing</span>
            <span>About</span>
            {/* <span>Sign In</span> */}

            <button className={active ?"  active" : " "}>Join</button>

        </div>
      </div>
    </div>
  )
}

export default Navbar