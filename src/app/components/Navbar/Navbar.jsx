import React from 'react'
import "./Navbar.css"
function Navbar() {
  return (
    <div className='navbar_wrap'>
        <div className="navbar">
        <div className="navbar_links">
         <div className="primary_nav">
                <a className='logo' href="">
                    PENTIUM98
                </a>
               
               <ul>
                <li><a href="">home</a></li>
                <li><a href="">about</a></li>
                <li><a href="">services</a></li>
                <li><a href="">products</a></li>
                <li><a href="">client</a></li>
               </ul>
        </div>
               <div className='secondary_nav'>
                <a className='contact_btn' href="">contact us</a>
               </div>

      </div>

            </div>
    </div>
  )
}

export default Navbar