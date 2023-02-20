import React from 'react'
//import {Link} from "react-router-dom"
import { NavLink } from 'react-router-dom'
import "./index.css"

const Navbar=()=>{
 return(
  <div className="navbar-container">
    <h1 className="web-name">Lunamar</h1>
    <nav>
        <ul className='menu-container'>
        <NavLink to="/" className='item'>Home</NavLink>
        <NavLink to="/about" className='item'>About</NavLink>
        <NavLink to="/services" className='item'>Services</NavLink>    
        <NavLink to="/blog" className='item'>Blog</NavLink>      
        <NavLink to="/contact" className='item'>Contact</NavLink>      
        <NavLink to="/gallery" className='item'>Gallery</NavLink>      
        <NavLink to="/loginregister" className='item'>Login/Register</NavLink>    
        </ul>  
    </nav>
  </div>
  )
}

export default Navbar