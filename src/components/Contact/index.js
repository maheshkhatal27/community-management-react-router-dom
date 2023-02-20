import "./index.css"
import React from 'react'
import Navbar from "../Navbar"

 const Contact = () => {
  return (
    <>
    <Navbar />
    <div className="contact-us-container"> 
        <nav className="contact-us-navbar">Contact Us</nav> 
        <form className="form-container">
        <div className="input-box-container">
            <input type="text" placeholder="First Name" className="input-box" />
            <input type="text" placeholder="Last Name" className="input-box" />
        </div>
        <div className="input-box-container">
            <input type="text" placeholder="Phone Number(optional)" className="input-box" />
            <input type="text" placeholder="Email" className="input-box" />
        </div>
        <textarea placeholder="Enter your comments" className="text-box"></textarea>
        <button type="button" className="button">Submit</button>
        </form>

    </div>
    </>
  )

}

export default Contact

