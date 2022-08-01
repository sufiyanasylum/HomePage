import React from 'react'
import '../Components/Nav.css'
import Logo from '../assets/img/main_logo.png'
export default function Nav() {
  return (
    <div>
   <nav className="navbar  navbar-expand-sm navbar-light bg-light">
   <img src={Logo} className="navbarone" width="60%" height="20" alt="Main logo" />

  {/* <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
    <span className="navbar-toggler-icon" ></span>
  </button> */}
  {/* <div className="collapse navbar-collapse " id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item ">
        <a className="nav-link " href="#" style={{ color: 'skyblue' }} >Home </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"  style={{ color: 'skyblue' }}>Features</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"  style={{ color: 'skyblue' }}>Pricing</a>
      </li>
     
    </ul>
  </div> */}
</nav>
    </div>
  )
}
