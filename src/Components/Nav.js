import React from 'react'
import '../Components/Nav.css'
import Logo from '../assets/img/main_logo.png'
export default function Nav() {
  return (
    <div>
   <nav className="navbar navbar-light bg-light">
  <a className="navbar-brand" href="#">
    <img src={Logo} className="navbarone" width="60%" height="20" alt="" />
  </a>
</nav>
    </div>
  )
}
