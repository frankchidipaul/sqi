import React from 'react'
import './Navbar.css'
import logo from '../../assets/co.jpg'
function Navbar() {
  return (
    <nav className='container'>
   <img src={logo} alt="" className='logo'/>
      <ul>
    <li>About</li>
    <li>programmes</li>
    <li>Admission</li>
    <li>E-Portal</li>
    <li>SQI Scholaeship</li>
    <a href=""><li>News</li></a>
    </ul>
    </nav>
  )
}

export default Navbar