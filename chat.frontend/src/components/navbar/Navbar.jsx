import React, { useEffect, useState } from 'react'
import './Navbar.scss'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'


const Navbar = () => {
  const {pathname} =  useLocation()


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
          <Link to="/" className='link'>               

             <span>ChatX</span>
          </Link>
          </div>
        </div>
        <div className= {pathname !=="/" ? "join " :""}>

        <div className="links">
            <a href='#feat' className='link'><span>Home</span></a>
            <a href='#price' className='link'><span>Pricing</span> </a>
            <a href='#ab' className='link'><span>About</span></a>

            {/* <span>About</span> */}
            {/* <span>Sign In</span> */}
            <Link to="/mssg" className='link'>               

                  <button className={active ?"  active" : " "}>Join</button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar