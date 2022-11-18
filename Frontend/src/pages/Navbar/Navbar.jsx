import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  
  return (
    <div className='navbar_container'>
      <div className="navbar_container-logo">Logo</div>
     
        <ul className="navbar_container-days">
          <NavLink to='/monday'>Monday</NavLink>
          <NavLink to='/thuesday'>Thuesday</NavLink>
          <NavLink to='/wednesday'>Wednesday</NavLink>
          <NavLink to='/thursday'>Thursday</NavLink>
          <NavLink to='/friday'>Friday</NavLink>
          <NavLink to='/saturday'>Saturday</NavLink>
          <NavLink to='/sunday'>Sunday</NavLink>
        </ul>
      
      <div className="navbar_container-exit">Salir</div>
    </div>
  )
}

export default Navbar
