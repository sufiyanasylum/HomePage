import React from 'react'
import '../Components/Nav.css'
import Logo from '../assets/img/main_logo.png'
export default function Nav() {
  return (
    <div>
   <nav class="navbar  navbar-expand-sm navbar-light bg-light">
   <img src={Logo} className="navbarone" width="60%" height="20" alt="" />

  <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
    <span class="navbar-toggler-icon" ></span>
  </button>
  <div class="collapse navbar-collapse " id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item ">
        <a class="nav-link " href="#" style={{ color: 'skyblue' }} >Home </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"  style={{ color: 'skyblue' }}>Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"  style={{ color: 'skyblue' }}>Pricing</a>
      </li>
     
    </ul>
  </div>
</nav>
    </div>
  )
}
